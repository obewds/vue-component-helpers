import{_ as n,c as s,o as a,a as p}from"./app.5d8ea49a.js";const d='{"title":"@obewds/vue-component-helpers Tests","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Testing Status","slug":"testing-status"},{"level":2,"title":"Vitest Tests","slug":"vitest-tests"},{"level":3,"title":"extract-valid-palettes.test.js","slug":"extract-valid-palettes-test-js"},{"level":3,"title":"get-bg-palette-color.test.js","slug":"get-bg-palette-color-test-js"},{"level":3,"title":"get-border-palette-color.test.js","slug":"get-border-palette-color-test-js"},{"level":3,"title":"get-text-palette-color.test.js","slug":"get-text-palette-color-test-js"},{"level":3,"title":"is-empty-element.test.js","slug":"is-empty-element-test-js"},{"level":3,"title":"is-empty-or-unsupported-element.test.js","slug":"is-empty-or-unsupported-element-test-js"},{"level":3,"title":"is-unsupported-element.test.js","slug":"is-unsupported-element-test-js"}],"relativePath":"tests.md"}',t={},e=p(`<h1 id="obewds-vue-component-helpers-tests" tabindex="-1">@obewds/vue-component-helpers Tests <a class="header-anchor" href="#obewds-vue-component-helpers-tests" aria-hidden="true">#</a></h1><h2 id="testing-status" tabindex="-1">Testing Status <a class="header-anchor" href="#testing-status" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">CURRENT STATUS</p><p><strong>100%</strong> Coverage<br><strong>100%</strong> Passing</p></div><h2 id="vitest-tests" tabindex="-1">Vitest Tests <a class="header-anchor" href="#vitest-tests" aria-hidden="true">#</a></h2><h3 id="extract-valid-palettes-test-js" tabindex="-1">extract-valid-palettes.test.js <a class="header-anchor" href="#extract-valid-palettes-test-js" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/extract-valid-palettes.test.js</span>


<span class="token keyword">import</span> <span class="token punctuation">{</span> extractValidPalettes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ObewdsTwConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/obewds-tw-config&#39;</span>


<span class="token comment">/*
test(&#39;extractValidPalettes helper returns an expected array of anchor palette name strings from the default ObewdsTwConfig config data&#39;, async () =&gt; {

    const extracted = extractValidPalettes(ObewdsTwConfig, &#39;anchor&#39;)

    extracted.forEach( (value) =&gt; {
        expect(ObewdsTwConfig.text.palettes[anchor]).toBeDefined()
    })

})
*/</span>


<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;extractValidPalettes helper returns an expected array of bg palette name strings from the default ObewdsTwConfig config data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> extracted <span class="token operator">=</span> <span class="token function">extractValidPalettes</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">,</span> <span class="token string">&#39;bg&#39;</span><span class="token punctuation">)</span>

    extracted<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">.</span>bg<span class="token punctuation">.</span>palettes<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeDefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;extractValidPalettes helper returns an expected array of border palette name strings from the default ObewdsTwConfig config data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> extracted <span class="token operator">=</span> <span class="token function">extractValidPalettes</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">,</span> <span class="token string">&#39;border&#39;</span><span class="token punctuation">)</span>

    extracted<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">.</span>border<span class="token punctuation">.</span>palettes<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeDefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;extractValidPalettes helper returns an expected array of text palette name strings from the default ObewdsTwConfig config data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> extracted <span class="token operator">=</span> <span class="token function">extractValidPalettes</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">,</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span>

    extracted<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">.</span>text<span class="token punctuation">.</span>palettes<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeDefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h3 id="get-bg-palette-color-test-js" tabindex="-1">get-bg-palette-color.test.js <a class="header-anchor" href="#get-bg-palette-color-test-js" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/get-bg-palette-color.test.js</span>


<span class="token keyword">import</span> <span class="token punctuation">{</span> getBgPaletteColor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ObewdsTwConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/obewds-tw-config&#39;</span>


<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;getBgPaletteColor helper returns an expected default palette primary string&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> extracted <span class="token operator">=</span> <span class="token function">getBgPaletteColor</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">,</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> initial <span class="token operator">=</span> ObewdsTwConfig<span class="token punctuation">.</span>bg<span class="token punctuation">.</span>palettes<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>primary

    <span class="token function">expect</span><span class="token punctuation">(</span>extracted<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>initial<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;getBgPaletteColor helper returns an empty string if passed an empty config object&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> extracted <span class="token operator">=</span> <span class="token function">getBgPaletteColor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>extracted<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="get-border-palette-color-test-js" tabindex="-1">get-border-palette-color.test.js <a class="header-anchor" href="#get-border-palette-color-test-js" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/get-border-palette-color.test.js</span>


<span class="token keyword">import</span> <span class="token punctuation">{</span> getBorderPaletteColor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ObewdsTwConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/obewds-tw-config&#39;</span>


<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;getBorderPaletteColor helper returns an expected default palette primary string&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> extracted <span class="token operator">=</span> <span class="token function">getBorderPaletteColor</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">,</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> initial <span class="token operator">=</span> ObewdsTwConfig<span class="token punctuation">.</span>border<span class="token punctuation">.</span>palettes<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>primary

    <span class="token function">expect</span><span class="token punctuation">(</span>extracted<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>initial<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;getBorderPaletteColor helper returns an empty string if passed an empty config object&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> extracted <span class="token operator">=</span> <span class="token function">getBorderPaletteColor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>extracted<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="get-text-palette-color-test-js" tabindex="-1">get-text-palette-color.test.js <a class="header-anchor" href="#get-text-palette-color-test-js" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/get-text-palette-color.test.js</span>


<span class="token keyword">import</span> <span class="token punctuation">{</span> getTextPaletteColor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ObewdsTwConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/obewds-tw-config&#39;</span>


<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;getTextPaletteColor helper returns an expected default palette primary string&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> extracted <span class="token operator">=</span> <span class="token function">getTextPaletteColor</span><span class="token punctuation">(</span>ObewdsTwConfig<span class="token punctuation">,</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> initial <span class="token operator">=</span> ObewdsTwConfig<span class="token punctuation">.</span>text<span class="token punctuation">.</span>palettes<span class="token punctuation">.</span>default<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>primary

    <span class="token function">expect</span><span class="token punctuation">(</span>extracted<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>initial<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;getTextPaletteColor helper returns an empty string if passed an empty config object&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> extracted <span class="token operator">=</span> <span class="token function">getTextPaletteColor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>extracted<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="is-empty-element-test-js" tabindex="-1">is-empty-element.test.js <a class="header-anchor" href="#is-empty-element-test-js" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/is-empty-element.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> blockLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> emptyElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> inlineLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isEmptyElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;isEmptyElement helper returns true for all empty element tags&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    emptyElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isEmptyEl <span class="token operator">=</span> <span class="token function">isEmptyElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isEmptyEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;isEmptyElement helper returns false for all block level element tags&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    blockLevelElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isEmptyEl <span class="token operator">=</span> <span class="token function">isEmptyElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isEmptyEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;isEmptyElement helper returns false for all inline level element tags&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    inlineLevelElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isEmptyEl <span class="token operator">=</span> <span class="token function">isEmptyElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isEmptyEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="is-empty-or-unsupported-element-test-js" tabindex="-1">is-empty-or-unsupported-element.test.js <a class="header-anchor" href="#is-empty-or-unsupported-element-test-js" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/is-empty-or-unsupported-element.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> blockLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> emptyElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> inlineLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isEmptyOrUnsupportedElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> unsupportedElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;isEmptyOrUnsupportedElement helper returns true for all empty &amp; unsupported element tags&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    emptyElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isEmptyOrUnsupportedEl <span class="token operator">=</span> <span class="token function">isEmptyOrUnsupportedElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isEmptyOrUnsupportedEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    unsupportedElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isEmptyOrUnsupportedEl <span class="token operator">=</span> <span class="token function">isEmptyOrUnsupportedElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isEmptyOrUnsupportedEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;isEmptyOrUnsupportedElement helper returns false for all block and inline level element tags&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    blockLevelElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isEmptyOrUnsupportedEl <span class="token operator">=</span> <span class="token function">isEmptyOrUnsupportedElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isEmptyOrUnsupportedEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    inlineLevelElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isEmptyOrUnsupportedEl <span class="token operator">=</span> <span class="token function">isEmptyOrUnsupportedElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isEmptyOrUnsupportedEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="is-unsupported-element-test-js" tabindex="-1">is-unsupported-element.test.js <a class="header-anchor" href="#is-unsupported-element-test-js" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/is-unsupported-element.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> blockLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> emptyElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> inlineLevelElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isUnsupportedElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../src/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> unsupportedElementTags <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@obewds/vue-validators&#39;</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;isUnsupportedElement helper returns true for all unsupported element tags&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    unsupportedElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isUnsupportedEl <span class="token operator">=</span> <span class="token function">isUnsupportedElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isUnsupportedEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;isUnsupportedElement helper returns false for all block level element tags&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    blockLevelElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isUnsupportedEl <span class="token operator">=</span> <span class="token function">isUnsupportedElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isUnsupportedEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;isUnsupportedElement helper returns false for all inline level element tags&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    inlineLevelElementTags<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> isUnsupportedEl <span class="token operator">=</span> <span class="token function">isUnsupportedElement</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>isUnsupportedEl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,18),o=[e];function c(l,u,r,i,k,b){return a(),s("div",null,o)}var g=n(t,[["render",c]]);export{d as __pageData,g as default};
