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






## extractValidPalettes()

### Parameters

:arrow_right: Requires a single `Object` (&lt;ObewdsTwConfig&gt; type) argument  
:arrow_right: Requires a single `String` (&lt;ObewdsTwConfigGroups&gt; type or a Top-Level Config Key) argument 

| Paramater | Type      | Required  | Description |
|-----------|-----------|-----------|-------------|
| **tw**    | `Object`  | Yes       | Expects a &lt;ObewdsTwConfig&gt; type object |
| **key**   | `String`  | Yes       | Expects a &lt;ObewdsTwConfigGroups&gt; type or a Top-Level Config Key (string) |

### Returns

:arrow_left: Returns an array with `String` values   

### Example

```html{4-5,7}
<script setup lang="ts">

    // import the default config object and helper
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
    import { extractValidPalettes } from '@obewds/vue-component-helpers'

    const bgPaletteNames = extractValidPalettes(ObewdsTwConfig, 'bg')

    // returns an array of strings
    // where each is a default bg palette name
    // from the default ObewdsTwConfig object
    console.log(bgPaletteNames)

</script>
```

<br>






## getBgPaletteColor()

### Parameters

:arrow_right: Requires a single `Object` (&lt;ObewdsTwConfig&gt; type) argument  
:arrow_right: Requires a single `String` (Background Palette Prop Value) argument  
:arrow_right: Requires a single `String` (Background Palette Color Prop Value) argument  

| Paramater   | Type      | Required  | Description |
|-------------|-----------|-----------|-------------|
| **config**  | `Object`  | Yes       | Expects a &lt;ObewdsTwConfig&gt; type object |
| **palette** | `String`  | Yes       | Expects a Background Palette Prop Value |
| **color**   | `String`  | Yes       | Expects a Background Palette Color Prop Value |

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

:arrow_right: Requires a single `Object` (&lt;ObewdsTwConfig&gt; type) argument  
:arrow_right: Requires a single `String` (Border Palette Prop Value) argument  
:arrow_right: Requires a single `String` (Border Palette Color Prop Value) argument  

| Paramater   | Type      | Required  | Description |
|-------------|-----------|-----------|-------------|
| **config**  | `Object`  | Yes       | Expects a &lt;ObewdsTwConfig&gt; type object |
| **palette** | `String`  | Yes       | Expects a Border Palette Prop Value |
| **color**   | `String`  | Yes       | Expects a Border Palette Color Prop Value |

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

:arrow_right: Requires a single `Object` (&lt;ObewdsTwConfig&gt; type) argument  
:arrow_right: Requires a single `String` (Text Palette Prop Value) argument  
:arrow_right: Requires a single `String` (Text Palette Color Prop Value) argument  

| Paramater   | Type      | Required  | Description |
|-------------|-----------|-----------|-------------|
| **config**  | `Object`  | Yes       | Expects a &lt;ObewdsTwConfig&gt; type object |
| **palette** | `String`  | Yes       | Expects a Text Palette Prop Value |
| **color**   | `String`  | Yes       | Expects a Text Palette Color Prop Value |

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






## mergeAppConfigWithDefaults()

### Parameters

:arrow_right: Requires a single `Object` (&lt;ObewdsTwConfig&gt; type) argument  

| Paramater       | Type      | Required  | Description |
|-----------------|-----------|-----------|-------------|
| **appTwConfig** | `Object`  | Yes       | Expects a &lt;ObewdsTwConfig&gt; type object |

### Returns

:arrow_left: Returns an `Object` (`typeof ObewdsTwConfig`) value  

### Examples

Using a manually defined app OBE:WDS Tailwind config object:

```html{3,5-15,17}
<script setup lang="ts">

    import { mergeAppConfigWithDefaults } from '@obewds/vue-component-helpers'

    const myObewdsTwConfig = {
        bg: {
            palettes: {
                "default": {
                    colors: {
                        primary: "text-indigo-500 dark:text-indigo-200"
                    }
                }
            }
        }
    }

    const tw = mergeAppConfigWithDefaults(myObewdsTwConfig)

    // returns an object with default @obewds/obewds-tw-config data
    // merged into the data provided in myObewdsTwConfig
    console.log(tw)

</script>
```

Using a `@obewds/vue-component-helpers` JSON config file:

```html{3,6,8}
<script setup lang="ts">

    import { mergeAppConfigWithDefaults } from '@obewds/vue-component-helpers'
    // import your customized app config version of an OBE:WDS Tailwind config object
    // (generated from scripts in the @obewds/obewds-tw-config package)
    import appTwConfig from '../obewds.tw.config.json'

    const tw = mergeAppConfigWithDefaults(appTwConfig)

    // returns an object with default @obewds/obewds-tw-config data
    // merged into the data provided in appTwConfig
    console.log(tw)

</script>
```

<br>





## validPaletteProps()

### Parameters

:arrow_right: Requires a single `Object` (&lt;ObewdsTwConfig&gt; type) argument  
:arrow_right: Requires a single `String` (&lt;ObewdsTwConfigGroups&gt; type or a Top-Level Config Key) argument 

| Paramater    | Type      | Required  | Description |
|--------------|-----------|-----------|-------------|
| **key**      | `String`  | Yes       | Expects a &lt;ObewdsTwConfigGroups&gt; type or a Top-Level Config Key (string) |
| **twConfig** | `Object`  | Yes       | Expects a &lt;ObewdsTwConfig&gt; type object |

### Returns

:arrow_left: Returns an array with `String` values   

### Example

```html{4-5,7}
<script setup lang="ts">

    // import the default config object and helper
    import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
    import { validPaletteProps } from '@obewds/vue-component-helpers'

    const bgPaletteNames = validPaletteProps('bg', ObewdsTwConfig)

    // returns an array of strings
    // where each is a default bg palette name
    // from the default ObewdsTwConfig object
    console.log(bgPaletteNames)

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
