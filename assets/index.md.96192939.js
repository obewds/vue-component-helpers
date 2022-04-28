import{_ as n,c as s,o as a,a as e}from"./app.d31260e2.js";const b='{"title":"@obewds/vue-component-helpers","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"isEmptyElement()","slug":"isemptyelement"},{"level":3,"title":"Properties","slug":"properties"},{"level":3,"title":"Use","slug":"use"},{"level":2,"title":"isUnsupportedElement()","slug":"isunsupportedelement"},{"level":3,"title":"Properties","slug":"properties-1"},{"level":3,"title":"Use","slug":"use-1"},{"level":2,"title":"Uninstall","slug":"uninstall"}],"relativePath":"index.md"}',t={},p=e(`<h1 id="obewds-vue-component-helpers" tabindex="-1">@obewds/vue-component-helpers <a class="header-anchor" href="#obewds-vue-component-helpers" aria-hidden="true">#</a></h1><p>Welcome to the docs page for OBE:WDS&#39;s <code>vue-component-helpers</code> functions for <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>!</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @obewds/vue-component-helpers --save-dev
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="isemptyelement" tabindex="-1">isEmptyElement() <a class="header-anchor" href="#isemptyelement" aria-hidden="true">#</a></h2><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><p>\u27A1\uFE0F - Accepts a single <code>String</code> argument \u2B05\uFE0F - Returns a <code>Boolean</code> value</p><h3 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    <span class="token keyword">import</span> <span class="token punctuation">{</span> isEmptyElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-component-helpers&#39;</span>

    <span class="token keyword">const</span> isBrEmpty <span class="token operator">=</span> <span class="token function">isEmptyElement</span><span class="token punctuation">(</span><span class="token string">&#39;br&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isBrEmpty<span class="token punctuation">)</span> <span class="token comment">// returns true</span>

    <span class="token keyword">const</span> isDivEmpty <span class="token operator">=</span> <span class="token function">isEmptyElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isBrEmpty<span class="token punctuation">)</span> <span class="token comment">// returns false</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="isunsupportedelement" tabindex="-1">isUnsupportedElement() <a class="header-anchor" href="#isunsupportedelement" aria-hidden="true">#</a></h2><h3 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h3><p>\u27A1\uFE0F - Accepts a single <code>String</code> argument \u2B05\uFE0F - Returns a <code>Boolean</code> value</p><h3 id="use-1" tabindex="-1">Use <a class="header-anchor" href="#use-1" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><div class="highlighted">\xA0</div><br><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    <span class="token keyword">import</span> <span class="token punctuation">{</span> isUnsupportedElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-component-helpers&#39;</span>

    <span class="token keyword">const</span> isBodyUnsupported <span class="token operator">=</span> <span class="token function">isUnsupportedElement</span><span class="token punctuation">(</span><span class="token string">&#39;body&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isBodyUnsupported<span class="token punctuation">)</span> <span class="token comment">// returns true</span>

    <span class="token keyword">const</span> isDivUnsupported <span class="token operator">=</span> <span class="token function">isUnsupportedElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isDivUnsupported<span class="token punctuation">)</span> <span class="token comment">// returns false</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="uninstall" tabindex="-1">Uninstall <a class="header-anchor" href="#uninstall" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token function">npm</span> uninstall @obewds/vue-component-helpers
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,16),o=[p];function l(r,c,i,u,d,m){return a(),s("div",null,o)}var h=n(t,[["render",l]]);export{b as __pageData,h as default};
