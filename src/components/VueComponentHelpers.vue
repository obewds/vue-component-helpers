<script setup lang="ts">

    type VueComponentHelpersProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<VueComponentHelpersProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>VueComponentHelpers</slot>
        </template>
    </div>

</template>
