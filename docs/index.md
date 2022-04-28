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
