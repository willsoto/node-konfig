"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[309],{4517:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h1><p>Configuration can be loaded from various sources and merged together to form the final config object your application will use.</p><p><strong>configs/development.json</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-app&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">5432</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>configs/local.json</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my-app&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">5432</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Konfig <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Create the store, this is the object you will use to access your config</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Parsers can be shared among loaders</span>\n<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">JSONParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This will load configuration from the specified files. A parser must be provided</span>\n<span class="token comment">// so the loader knows how to interpret the file.</span>\n<span class="token comment">// Files are loaded in order, so any conflicts will be resolved through a &quot;last one wins&quot; approach.</span>\n<span class="token comment">// In this case, `local.json` will override properties that exist in both configurations.</span>\n<span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">FileLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  files<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;configs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;development.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token comment">// This will tell the loader how it should interpret the files it loads</span>\n      parser<span class="token operator">:</span> parser<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;configs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;local.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token comment">// This will tell the loader how it should interpret the files it loads</span>\n      parser<span class="token operator">:</span> parser<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Make sure the loader is registered on the store in order for it to be processed.</span>\nstore<span class="token punctuation">.</span><span class="token function">registerLoader</span><span class="token punctuation">(</span>loader<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// `init` must be called in order to actually resolve and process all the registered loaders</span>\n<span class="token comment">// This only needs to be called once at some point during application startup.</span>\n<span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> databaseConfig <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>databaseConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// {</span>\n<span class="token comment">//   &quot;host&quot;: &quot;localhost&quot;,</span>\n<span class="token comment">//   &quot;port&quot;: 5432,</span>\n<span class="token comment">//   &quot;user&quot;: &quot;development&quot;,</span>\n<span class="token comment">//   &quot;password&quot;: &quot;development&quot;</span>\n<span class="token comment">// }</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>',7),e={render:function(n,s){return p}}},6073:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7873bc78",path:"/guide/usage.html",title:"Basic usage",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/usage.md",git:{updatedTime:1620250316e3}}}}]);