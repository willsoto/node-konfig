(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19],{2360:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(8133).uE)('<h1 id="specifying-loaders-per-environment"><a class="header-anchor" href="#specifying-loaders-per-environment">#</a> Specifying loaders per environment</h1><p>Loaders can also be declared for each environment. Loaders specified in this way will always take precedence over &quot;default&quot; loaders (i.e., those not belonging to any environment).</p><p>In this example, we use Vault for staging and production, but not for development.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Konfig <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> VaultLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-vault&quot;</span><span class="token punctuation">;</span>\n\n<span class="token function">assert</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_KONFIG_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  loadersByEnvironment<span class="token operator">:</span> <span class="token punctuation">{</span>\n    development<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">ValueLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        values<span class="token operator">:</span> <span class="token punctuation">{</span>\n          name<span class="token operator">:</span> <span class="token string">&quot;app-development&quot;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    staging<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">VaultLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    production<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">VaultLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nstore<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// app-development</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>In terms of how the resulting store would look, this example is equivalent to the previous example.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Konfig <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> VaultLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-vault&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  loaders<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">ValueLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      values<span class="token operator">:</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&quot;app-development&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  loadersByEnvironment<span class="token operator">:</span> <span class="token punctuation">{</span>\n    staging<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">VaultLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    production<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">VaultLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nstore<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// app-development</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>Which environment to load will be determined by the presence (or lack thereof) of certain environment variables. They will be evaluated in the following order, defaulting to &quot;development&quot; if not set.</p><ol><li><code>NODE_KONFIG_ENV</code></li><li><code>NODE_ENV</code></li><li>&quot;development&quot;</li></ol>',8),e={render:function(n,s){return p}}},2207:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-c404f702",path:"/guide/environment-loaders.html",title:"Specifying loaders per environment",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/environment-loaders.md",git:{updatedTime:1619045143e3}}}}]);