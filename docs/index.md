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



### Properties

:arrow_right: - Accepts a single `String` argument
:arrow_left: - Returns a `Boolean` value  

### Use

```html{3,5}
<script setup lang="ts">

    import { isEmptyElement } from '@obewds/vue-component-helpers'

    const isBrEmpty = isEmptyElement('br')
    console.log(isBrEmpty) // returns true

    const isDivEmpty = isEmptyElement('div')
    console.log(isBrEmpty) // returns false

</script>
```




## isUnsupportedElement()



### Properties

:arrow_right: - Accepts a single `String` argument
:arrow_left: - Returns a `Boolean` value  

### Use

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
