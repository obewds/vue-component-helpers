<script setup lang="ts">

    import validPaletteProps from '../helpers/valid-palette-props'

    // type VueComponentHelpersProps = {
    //     bgPalette?: string | undefined,
    //     bgColor?: string | undefined,
    // }

    /*const props = withDefaults(
        defineProps<VueComponentHelpersProps>(), {
            bgPalette: 'default',
            bgColor: 'primary',
        }
    )*/

    const props = defineProps({
        bgPalette: {
            type: String,
            default: 'default',
            //validator: (prop: string): boolean => (validPaletteProps('bg')).includes(prop),
        },
        bgColor: {
            type: String,
            default: 'default',
        },
    })

</script>


<template>

    <div>
        <div>bgPalette: {{ bgPalette }}</div>
        <div>bgColor: {{ bgColor }}</div>
    </div>

</template>
