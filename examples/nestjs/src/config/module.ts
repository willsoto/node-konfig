import { Module } from "@nestjs/common";
import { NodeKonfigModule } from "@willsoto/nestjs-node-konfig";
import * as Konfig from "@willsoto/node-konfig-core";
import { Loader } from "@willsoto/node-konfig-core";
import { VaultLoader } from "@willsoto/node-konfig-vault";
import * as vault from "node-vault";
import { join } from "path";

// FOR EXAMPLE ONLY
async function makeVaultSecret() {
  const client = vault({ token: "development" });

  await client.write("secret/data/database", {
    data: {
      database: {
        host: "rds.foo.bar",
        database: "production",
        password: "production",
      },
    },
  });
}

@Module({
  imports: [
    NodeKonfigModule.registerAsync({
      async useFactory() {
        const env = process.env.NODE_ENV ?? "development";
        const parser = new Konfig.YAMLParser();

        const loaders: Loader[] = [
          new Konfig.FileLoader({
            files: [
              {
                parser,
                path: join(__dirname, `${env}.yaml`),
              },
            ],
          }),
        ];

        if (process.env.NODE_ENV !== "development") {
          await makeVaultSecret();

          loaders.push(
            new VaultLoader({
              vaultOptions: {
                endpoint: "http://localhost:8200", // process.env.VAULT_ADDR
                token: "development", // process.env.VAULT_TOKEN
              },
              secrets: [
                {
                  key: "secret/data/database",
                },
              ],
            }),
          );
        }

        return {
          loaders,
        };
      },
    }),
  ],
})
export class ConfigModule {}
