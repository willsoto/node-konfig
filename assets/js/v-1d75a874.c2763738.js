"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[456],{8823:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><p>A parser is responsible for converting other structures into plain old JavaScript objects (POJOs).</p><h2 id="core-parsers" tabindex="-1"><a class="header-anchor" href="#core-parsers" aria-hidden="true">#</a> Core parsers</h2><p>The following parsers are included by default in <code>node-konfig-core</code>:</p><ul><li><code>JSONParser</code></li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>For loaders that support it, an appropriate parser must be instantiated and passed to the loader. Parsers can be shared between loaders.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Konfig <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">FileLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  files<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;config.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      parser<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">JSONParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',8),p={render:function(s,n){return e}}},3294:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-1d75a874",path:"/parsers/",title:"Overview",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Core parsers",slug:"core-parsers",children:[]},{level:2,title:"Usage",slug:"usage",children:[]}],filePathRelative:"parsers/README.md",git:{updatedTime:162923722e4}}}}]);