import{_ as n,c as s,o as a,a as t}from"./app.d31260e2.js";const d='{"title":"@obewds/vue-component-helpers Component","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"ES Module Version","slug":"es-module-version"},{"level":2,"title":"UMD Version","slug":"umd-version"},{"level":2,"title":"CJS Version","slug":"cjs-version"},{"level":2,"title":"IIFE (Browser) Code","slug":"iife-browser-code"}],"relativePath":"component.md"}',p={},o=t(`<div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is an example GitHub Pages site and is NOT intended for actual use in real projects/products!</p></div><h1 id="obewds-vue-component-helpers-component" tabindex="-1">@obewds/vue-component-helpers Component <a class="header-anchor" href="#obewds-vue-component-helpers-component" aria-hidden="true">#</a></h1><h2 id="es-module-version" tabindex="-1">ES Module Version <a class="header-anchor" href="#es-module-version" aria-hidden="true">#</a></h2><p>ESM version</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">var</span> emptyElementTags <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;area&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;br&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;col&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;embed&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;hr&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;keygen&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;param&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;source&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;track&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;wbr&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> unsupportedElementTags <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;body&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;noscript&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;slot&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;template&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">isEmptyElement</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isEmptyElement2 <span class="token operator">=</span> emptyElementTags<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isEmptyElement2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;The &lt;&quot;</span> <span class="token operator">+</span> tag <span class="token operator">+</span> <span class="token string">&quot;&gt; tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">isUnsupportedElement</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isUnsupportedElement2 <span class="token operator">=</span> unsupportedElementTags<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isUnsupportedElement2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;The &lt;&quot;</span> <span class="token operator">+</span> tag <span class="token operator">+</span> <span class="token string">&quot;&gt; element tag is not supported for rendering by this component.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> isEmptyElement<span class="token punctuation">,</span> isUnsupportedElement <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="umd-version" tabindex="-1">UMD Version <a class="header-anchor" href="#umd-version" aria-hidden="true">#</a></h2><p>Version used by Node.js (Universal version for Common.js/AMD)</p><div class="language-js line-numbers-mode"><pre><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span>t</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">typeof</span> exports<span class="token operator">==</span><span class="token string">&quot;object&quot;</span><span class="token operator">&amp;&amp;</span><span class="token keyword">typeof</span> module<span class="token operator">!=</span><span class="token string">&quot;undefined&quot;</span><span class="token operator">?</span><span class="token function">t</span><span class="token punctuation">(</span>exports<span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">typeof</span> define<span class="token operator">==</span><span class="token string">&quot;function&quot;</span><span class="token operator">&amp;&amp;</span>define<span class="token punctuation">.</span>amd<span class="token operator">?</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;exports&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">(</span>e<span class="token operator">=</span><span class="token keyword">typeof</span> globalThis<span class="token operator">!=</span><span class="token string">&quot;undefined&quot;</span><span class="token operator">?</span>globalThis<span class="token operator">:</span>e<span class="token operator">||</span>self<span class="token punctuation">,</span><span class="token function">t</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>VueComponentHelpers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span><span class="token keyword">var</span> t<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;area&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;br&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;col&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;embed&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hr&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;keygen&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;param&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;source&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;track&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wbr&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>s<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;noscript&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;slot&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;template&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">function</span> <span class="token function">o</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> t<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;The &lt;&quot;</span><span class="token operator">+</span>n<span class="token operator">+</span><span class="token string">&quot;&gt; tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token keyword">function</span> <span class="token function">i</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;The &lt;&quot;</span><span class="token operator">+</span>n<span class="token operator">+</span><span class="token string">&quot;&gt; element tag is not supported for rendering by this component.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">}</span>e<span class="token punctuation">.</span>isEmptyElement<span class="token operator">=</span>o<span class="token punctuation">,</span>e<span class="token punctuation">.</span>isUnsupportedElement<span class="token operator">=</span>i<span class="token punctuation">,</span>Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">__esModule</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&quot;Module&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="cjs-version" tabindex="-1">CJS Version <a class="header-anchor" href="#cjs-version" aria-hidden="true">#</a></h2><p>CommonJS version</p><div class="language-js line-numbers-mode"><pre><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">__esModule</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&quot;Module&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">var</span> n<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;area&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;br&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;col&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;embed&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hr&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;keygen&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;param&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;source&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;track&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wbr&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>r<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;noscript&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;slot&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;template&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">function</span> <span class="token function">s</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> n<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;The &lt;&quot;</span><span class="token operator">+</span>e<span class="token operator">+</span><span class="token string">&quot;&gt; tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token keyword">function</span> <span class="token function">o</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> r<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;The &lt;&quot;</span><span class="token operator">+</span>e<span class="token operator">+</span><span class="token string">&quot;&gt; element tag is not supported for rendering by this component.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">}</span>exports<span class="token punctuation">.</span>isEmptyElement<span class="token operator">=</span>s<span class="token punctuation">;</span>exports<span class="token punctuation">.</span>isUnsupportedElement<span class="token operator">=</span>o<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="iife-browser-code" tabindex="-1">IIFE (Browser) Code <a class="header-anchor" href="#iife-browser-code" aria-hidden="true">#</a></h2><p>Version used for browser instances</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">VueComponentHelpers</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span><span class="token keyword">var</span> n<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;area&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;br&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;col&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;embed&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hr&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;keygen&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;meta&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;param&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;source&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;track&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wbr&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>r<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;noscript&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;slot&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;template&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">function</span> <span class="token function">s</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> n<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;The &lt;&quot;</span><span class="token operator">+</span>e<span class="token operator">+</span><span class="token string">&quot;&gt; tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token keyword">function</span> <span class="token function">o</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> r<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;The &lt;&quot;</span><span class="token operator">+</span>e<span class="token operator">+</span><span class="token string">&quot;&gt; element tag is not supported for rendering by this component.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token keyword">return</span> t<span class="token punctuation">.</span>isEmptyElement<span class="token operator">=</span>s<span class="token punctuation">,</span>t<span class="token punctuation">.</span>isUnsupportedElement<span class="token operator">=</span>o<span class="token punctuation">,</span>Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">__esModule</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toStringTag<span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&quot;Module&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>t<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,14),e=[o];function c(u,l,r,i,k,q){return a(),s("div",null,e)}var b=n(p,[["render",c]]);export{d as __pageData,b as default};
