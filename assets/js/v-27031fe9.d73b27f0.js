"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[0],{4775:(n,s,a)=>{a.r(s),a.d(s,{default:()=>q});var e=a(6252);const l=(0,e.uE)('<h1 id="consul" tabindex="-1"><a class="header-anchor" href="#consul" aria-hidden="true">#</a> Consul</h1><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @willsoto/node-konfig-consul\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @willsoto/node-konfig-consul\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> @willsoto/node-konfig-consul\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Konfig <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-core&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ConsulLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@willsoto/node-konfig-consul&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsulLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  keys<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      key<span class="token operator">:</span> <span class="token string">&quot;database&quot;</span><span class="token punctuation">,</span>\n      parser<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Konfig</span><span class="token punctuation">.</span><span class="token function">JSONParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      key<span class="token operator">:</span> <span class="token string">&quot;appName&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',7),t=(0,e.Uk)("Check the documentation for "),o={href:"https://github.com/silas/node-consul",target:"_blank",rel:"noopener noreferrer"},p=(0,e.Uk)("consul"),u=(0,e.Uk)(" for configuration options."),c=(0,e._)("h2",{id:"options",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,e.Uk)(" Options")],-1),r=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"Name"),(0,e._)("th",null,"Required"),(0,e._)("th",null,"Description")])],-1),i=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"keys")]),(0,e._)("td",null,"yes"),(0,e._)("td",null,[(0,e.Uk)("An array of keys to load. See "),(0,e._)("code",null,"Key"),(0,e.Uk)(" for more information.")])],-1),d=(0,e._)("td",null,[(0,e._)("code",null,"consulOptions")],-1),k=(0,e._)("td",null,"no",-1),h={href:"https://github.com/silas/node-consul#consuloptions",target:"_blank",rel:"noopener noreferrer"},b=(0,e._)("code",null,"ConsulOptions",-1),m=(0,e._)("h3",{id:"key",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#key","aria-hidden":"true"},"#"),(0,e.Uk)(" Key")],-1),g=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"Name"),(0,e._)("th",null,"Required"),(0,e._)("th",null,"Description")])],-1),_=(0,e._)("tr",null,[(0,e._)("td",null,[(0,e._)("code",null,"key")]),(0,e._)("td",null,"yes"),(0,e._)("td",null,"The path to the secret in Consul.")],-1),f=(0,e._)("td",null,[(0,e._)("code",null,"getOptions")],-1),y=(0,e._)("td",null,"no",-1),v={href:"https://github.com/silas/node-consul#kv-get",target:"_blank",rel:"noopener noreferrer"},w=(0,e._)("code",null,"consul.Kv.GetOptions",-1),q={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("p",null,[t,(0,e._)("a",o,[p,(0,e.Wm)(a)]),u]),c,(0,e._)("table",null,[r,(0,e._)("tbody",null,[i,(0,e._)("tr",null,[d,k,(0,e._)("td",null,[(0,e._)("a",h,[b,(0,e.Wm)(a)])])])])]),m,(0,e._)("table",null,[g,(0,e._)("tbody",null,[_,(0,e._)("tr",null,[f,y,(0,e._)("td",null,[(0,e._)("a",v,[w,(0,e.Wm)(a)])])])])])],64)}}},2306:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-27031fe9",path:"/loaders/consul.html",title:"Consul",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"Usage",slug:"usage",children:[]},{level:2,title:"Options",slug:"options",children:[{level:3,title:"Key",slug:"key",children:[]}]}],filePathRelative:"loaders/consul.md",git:{updatedTime:161222883e4}}}}]);