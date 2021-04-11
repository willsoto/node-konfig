(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[623],{4531:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(8133).uE)('<h1 id="integrations"><a class="header-anchor" href="#integrations">#</a> Integrations</h1><h2 id="nestjs"><a class="header-anchor" href="#nestjs">#</a> NestJS</h2><h3 id="installation"><a class="header-anchor" href="#installation">#</a> Installation</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @willsoto/nestjs-node-konfig\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @willsoto/nestjs-node-konfig\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> @willsoto/nestjs-node-konfig\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="usage"><a class="header-anchor" href="#usage">#</a> Usage</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeKonfigModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/nestjs-node-konfig&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ValueLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n\n@<span class="token function">Module</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n    NodeKonfigModule<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      storeOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n        loaders<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token keyword">new</span> <span class="token class-name">ValueLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            values<span class="token operator">:</span> <span class="token punctuation">{</span>\n              foo<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ConfigModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n\n@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SomeService</span> <span class="token punctuation">{</span>\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> <span class="token keyword">readonly</span> store<span class="token operator">:</span> Store<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// do something with value</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>You can also provide a <code>name</code> if you wish to have multiple stores.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeKonfigModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/nestjs-node-konfig&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>\n\n@<span class="token function">Module</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n    NodeKonfigModule<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token comment">// Can also be set when using `registerAsync`</span>\n      name<span class="token operator">:</span> <span class="token string">&quot;userConfigStore&quot;</span><span class="token punctuation">,</span>\n      storeOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n        loaders<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token keyword">new</span> <span class="token class-name">ValueLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            values<span class="token operator">:</span> <span class="token punctuation">{</span>\n              foo<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UsersConfigModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable<span class="token punctuation">,</span> Inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n\n@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">SomeService</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Inject using the token you provided when registering the store to get that instance.</span>\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span>@<span class="token function">Inject</span><span class="token punctuation">(</span><span class="token string">&quot;userConfigStore&quot;</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">readonly</span> store<span class="token operator">:</span> Store<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// do something with value</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',12),t={render:function(n,s){return p}}},6753:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-100dc897",path:"/integrations/",title:"Integrations",frontmatter:{},excerpt:"",headers:[{level:2,title:"NestJS",slug:"nestjs",children:[{level:3,title:"Installation",slug:"installation",children:[]},{level:3,title:"Usage",slug:"usage",children:[]}]}],filePathRelative:"integrations/README.md",git:{updatedTime:1618170928e3}}}}]);