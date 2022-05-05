---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


# @obewds/vue-component-helpers

Welcome to the docs page for OBE:WDS's `vue-component-helpers` functions for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/vue-component-helpers --save-dev
```

<br>






## getBgPaletteColor()

### Parameters

:arrow_right: Requires a single `Object` (&lt;ObewdsTwConfig&gt;) argument  
:arrow_right: Requires a single `String` (Background Palette Prop Value) argument  
:arrow_right: Requires a single `String` (Background Palette Color Prop Value) argument  

| Paramater           | Type      | Required  | Description |
|---------------------|-----------|-----------|-------------|
| **ObewdsTwConfig**  | `Object`  | Yes       | Expects a &lt;ObewdsTwConfig&gt; type object |
| **Bg Palette Prop** | `String`  | Yes       | Expects a Background Palette Prop Value |
| **Bg Color Prop**   | `String`  | Yes       | Expects a Background Palette Color Prop Value |

### Returns

:arrow_left: Returns a `String` value  

### Example

```html{5,7}
<script setup lang="ts">

    // import the default config object
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
    import { getBgPaletteColor } from '@obewds/vue-component-helpers'

    const bgPrimaryColor = getBgPaletteColor(ObewdsTwConfig, 'default', 'primary')

    console.log(bgPrimaryColor) // returns a string of primary background CSS classes

</script>
```

<br>




## getBorderPaletteColor()

### Parameters

:arrow_right: Requires a single `Object` (&lt;ObewdsTwConfig&gt;) argument  
:arrow_right: Requires a single `String` (Border Palette Prop Value) argument  
:arrow_right: Requires a single `String` (Border Palette Color Prop Value) argument  

| Paramater               | Type      | Required  | Description |
|-------------------------|-----------|-----------|-------------|
| **ObewdsTwConfig**      | `Object`  | Yes       | Expects a &lt;ObewdsTwConfig&gt; type object |
| **Border Palette Prop** | `String`  | Yes       | Expects a Border Palette Prop Value |
| **Border Color Prop**   | `String`  | Yes       | Expects a Border Palette Color Prop Value |

### Returns

:arrow_left: Returns a `String` value  

### Example

```html{5,7}
<script setup lang="ts">

    // import the default config object
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
    import { getBorderPaletteColor } from '@obewds/vue-component-helpers'

    const borderPrimaryColor = getBorderPaletteColor(ObewdsTwConfig, 'default', 'primary')

    console.log(borderPrimaryColor) // returns a string of primary background CSS classes

</script>
```

<br>




## getTextPaletteColor()

### Parameters

:arrow_right: Requires a single `Object` (&lt;ObewdsTwConfig&gt;) argument  
:arrow_right: Requires a single `String` (Text Palette Prop Value) argument  
:arrow_right: Requires a single `String` (Text Palette Color Prop Value) argument  

| Paramater             | Type      | Required  | Description |
|-----------------------|-----------|-----------|-------------|
| **ObewdsTwConfig**    | `Object`  | Yes       | Expects a &lt;ObewdsTwConfig&gt; type object |
| **Text Palette Prop** | `String`  | Yes       | Expects a Text Palette Prop Value |
| **Text Color Prop**   | `String`  | Yes       | Expects a Text Palette Color Prop Value |

### Returns

:arrow_left: Returns a `String` value  

### Example

```html{5,7}
<script setup lang="ts">

    // import the default config object
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
    import { getTextPaletteColor } from '@obewds/vue-component-helpers'

    const textPrimaryColor = getTextPaletteColor(ObewdsTwConfig, 'default', 'primary')

    console.log(textPrimaryColor) // returns a string of primary background CSS classes

</script>
```

<br>






## isEmptyElement()

### Parameters

:arrow_right: Requires a single `String` (HTML tag name) argument  

| Paramater | Type      | Required  | Description |
|-----------|-----------|-----------|-------------|
| **tag**   | `String`  | Yes       | Expects a single HTML tag name |

### Returns

:arrow_left: Returns a `Boolean` value  

### Example

```html{3,5}
<script setup lang="ts">

    import { isEmptyElement } from '@obewds/vue-component-helpers'

    const isBrEmpty = isEmptyElement('br')
    console.log(isBrEmpty) // returns true

    const isDivEmpty = isEmptyElement('div')
    console.log(isBrEmpty) // returns false

</script>
```

<br>





## isEmptyOrUnsupportedElement()

### Parameters

:arrow_right: Requires a single `String` (HTML tag name) argument  

| Paramater | Type      | Required  | Description |
|-----------|-----------|-----------|-------------|
| **tag**   | `String`  | Yes       | Expects a single HTML tag name |

### Returns

:arrow_left: Returns a `Boolean` value  

### Example

```html{3,5}
<script setup lang="ts">

    import { isEmptyOrUnsupportedElement } from '@obewds/vue-component-helpers'

    const isBrEmpty = isEmptyOrUnsupportedElement('br')
    console.log(isBrEmpty) // returns true

    const isBodyUnsupported = isEmptyOrUnsupportedElement('body')
    console.log(isBodyUnsupported) // returns true

    const isDivEmpty = isEmptyOrUnsupportedElement('div')
    console.log(isBrEmpty) // returns false

</script>
```

<br>






## isUnsupportedElement()

### Parameters

:arrow_right: Requires a single `String` (HTML tag name) argument  

| Paramater | Type      | Required  | Description |
|-----------|-----------|-----------|-------------|
| **tag**   | `String`  | Yes       | Expects a single HTML tag name |

### Returns

:arrow_left: Returns a `Boolean` value  

### Example

```html{3,5}
<script setup lang="ts">

    import { isUnsupportedElement } from '@obewds/vue-component-helpers'

    const isBodyUnsupported = isUnsupportedElement('body')
    console.log(isBodyUnsupported) // returns true

    const isDivUnsupported = isUnsupportedElement('div')
    console.log(isDivUnsupported) // returns false

</script>
```

<br>






## Uninstall

```bash
npm uninstall @obewds/vue-component-helpers
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->
