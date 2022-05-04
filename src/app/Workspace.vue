<!--
    ./src/app/Workspace.vue
-->


<script setup lang="ts">

    import { isEmptyElement } from '../index'
    import { emptyElementTags } from '@obewds/vue-validators'
    import { unsupportedElementTags } from '@obewds/vue-validators'

    const tw = {
        flex: 'flex justify-center flex-wrap pt-2 pb-6',
        heading: 'block text-xl bg-green-500 bg-opacity-25 text-green-800 py-1',
        mark: 'px-1',
        span: 'px-2 py-1',
    }

</script>


<template>

    <div class="text-green-500 text-xs pb-1">WORKSPACE</div>
    
    <div class="bg-white text-center border-t-2 border-b-2 border-green-500 border-dashed py-24">


        <strong :class="tw.heading">
            isEmptyElement() = true
        </strong>

        <div :class="tw.flex">
            <template v-for="tag in emptyElementTags">
                <span :class="tw.span">
                    <code :class="tw.mark">
                        &lt;{{ tag }}&gt;
                    </code>
                </span>
            </template>
        </div>


        <strong :class="tw.heading">
            isEmptyOrUnsupportedElement() = true
        </strong>

        <div :class="tw.flex">
            <template v-for="tag in emptyElementTags">
                <span :class="tw.span">
                    <code :class="tw.mark">
                        &lt;{{ tag }}&gt;
                    </code>
                </span>
            </template>
            <template v-for="tag in unsupportedElementTags">
                <span :class="tw.span">
                    <code :class="tw.mark">
                        &lt;{{ tag }}&gt;
                    </code>
                </span>
            </template>
        </div>


        <strong :class="tw.heading">
            isUnsupportedElement() = true
        </strong>

        <div :class="tw.flex">
            <template v-for="tag in unsupportedElementTags">
                <span :class="tw.span">
                    <code :class="tw.mark">
                        &lt;{{ tag }}&gt;
                    </code>
                </span>
            </template>
        </div>


    </div>

</template>
