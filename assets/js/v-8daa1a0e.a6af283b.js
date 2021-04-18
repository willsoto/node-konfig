(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[509],{5933:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});var p=a(8133);const t=(0,p.Uk)("Configuration library for Node.js written in TypeScript. Can load and merge configuration for multiple sources into one object for easy access. Inspired by Go's "),e={href:"https://github.com/lalamove/konfig",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("Konfig."),c=(0,p.uE)('<h1 id="quick-look"><a class="header-anchor" href="#quick-look">#</a> Quick look</h1><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># configs/default.yaml</span>\n<span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;my-app&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// configs/development.json</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">5432</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Konfig <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> VaultLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-vault&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> configDir <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;configs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Create the store, this is the object you will use to access your config</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Always load some defaults.</span>\n<span class="token comment">// These values will be merged with subsequent loaders. On conflicts, last one wins.</span>\nstore<span class="token punctuation">.</span><span class="token function">regiserLoader</span><span class="token punctuation">(</span>\n  <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">FileLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    files<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>configDir<span class="token punctuation">,</span> <span class="token string">&quot;default.yaml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token comment">// This will tell the `FileLoader` how it should interpret the files it loads</span>\n        parser<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">YAMLParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Use a local json file in development</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">FileLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    files<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>configDir<span class="token punctuation">,</span> <span class="token string">&quot;development.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        parser<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">JSONParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// Make sure the loader is registered on the store in order for it to be processed</span>\n  store<span class="token punctuation">.</span><span class="token function">registerLoader</span><span class="token punctuation">(</span>loader<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Use Vault in production or any other non-development environment.</span>\n  store<span class="token punctuation">.</span><span class="token function">regiserLoader</span><span class="token punctuation">(</span>\n    <span class="token keyword">new</span> <span class="token class-name">VaultLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      secrets<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          key<span class="token operator">:</span> <span class="token string">&quot;secret/data/database&quot;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// `init` must be called in order to actually resolve and process all the registered loaders</span>\n<span class="token comment">// This only needs to be called once at some point during application startup</span>\n<span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nstore<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;my-app&quot;</span>\nstore<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Will return the appropriate database configuration based on `NODE_ENV`</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div>',4),l={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[(0,p.Wm)("p",null,[t,(0,p.Wm)("a",e,[o,(0,p.Wm)(a)])]),c],64)}}},1309:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-8daa1a0e",path:"/",title:"",frontmatter:{home:!0,tagline:"Flexible configuration library for Node.js",actions:[{text:"Get started",link:"/guide/",type:"primary"},{text:"View integrations",link:"/integrations/",type:"primary"}]},excerpt:"",headers:[],filePathRelative:"index.md",git:{updatedTime:1618782821e3}}}}]);