import{_ as s,c as a,o as n,a as o}from"./app.0e257e40.js";const h=JSON.parse('{"title":"Etcd","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"Key","slug":"key","link":"#key","children":[]}]}],"relativePath":"loaders/etcd.md"}'),l={name:"loaders/etcd.md"},e=o(`<h1 id="etcd" tabindex="-1">Etcd <a class="header-anchor" href="#etcd" aria-hidden="true">#</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@willsoto/node-konfig-etcd</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@willsoto/node-konfig-etcd</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@willsoto/node-konfig-etcd</span></span>
<span class="line"></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> Konfig </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@willsoto/node-konfig-core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">EtcdLoader</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@willsoto/node-konfig-etcd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> loader </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">EtcdLoader</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">keys</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">accessor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">database</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">parser</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Konfig</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">JSONParser</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Check the documentation for <a href="https://github.com/microsoft/etcd3" target="_blank" rel="noreferrer">etcd3</a> for configuration options.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>keys</code></td><td>yes</td><td>An array of values to load. See <code>Key</code> for more information.</td></tr><tr><td><code>etcd3Options</code></td><td>no</td><td><a href="https://microsoft.github.io/etcd3/interfaces/ioptions.html" target="_blank" rel="noreferrer"><code>IOptions</code></a></td></tr></tbody></table><h3 id="key" tabindex="-1">Key <a class="header-anchor" href="#key" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>accessor</code></td><td>yes</td><td>The path to the value in Etcd.</td></tr></tbody></table>`,12),t=[e];function p(c,r,i,d,y,D){return n(),a("div",null,t)}const F=s(l,[["render",p]]);export{h as __pageData,F as default};