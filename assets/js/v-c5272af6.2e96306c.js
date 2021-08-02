"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[328],{18:(n,s,a)=>{a.r(s),a.d(s,{default:()=>d});var e=a(6252);const t=(0,e.uE)('<h1 id="flag" tabindex="-1"><a class="header-anchor" href="#flag" aria-hidden="true">#</a> Flag</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Loads configuration from CLI flags.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Konfig <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">FlagLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  cliOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n    flags<span class="token operator">:</span> <span class="token punctuation">{</span>\n      environment<span class="token operator">:</span> <span class="token punctuation">{</span>\n        alias<span class="token operator">:</span> <span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span>\n        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      appName<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ts-node /src/main.ts --environment production --app-name my-app\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Loads the following structure into the store</span>\nstore<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;environment&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;production&quot;</span>\nstore<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;appName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;my-app&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',8),p=(0,e.Wm)("thead",null,[(0,e.Wm)("tr",null,[(0,e.Wm)("th",null,"Name"),(0,e.Wm)("th",null,"Required"),(0,e.Wm)("th",null,"Description")])],-1),o=(0,e.Wm)("td",null,[(0,e.Wm)("code",null,"cliOptions")],-1),l=(0,e.Wm)("td",null,"yes",-1),c=(0,e.Uk)("See "),r={href:"https://github.com/sindresorhus/meow",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("meow"),i=(0,e.Uk)(" for options."),d={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("table",null,[p,(0,e.Wm)("tbody",null,[(0,e.Wm)("tr",null,[o,l,(0,e.Wm)("td",null,[c,(0,e.Wm)("a",r,[u,(0,e.Wm)(a)]),i])])])])],64)}}},767:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-c5272af6",path:"/loaders/flag.html",title:"Flag",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[]},{level:2,title:"Usage",slug:"usage",children:[]},{level:2,title:"Options",slug:"options",children:[]}],filePathRelative:"loaders/flag.md",git:{updatedTime:161222883e4}}}}]);