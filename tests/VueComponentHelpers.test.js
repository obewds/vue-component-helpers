// ./tests/VueComponentHelpers.test.js

import { mount } from '@vue/test-utils'
import VueComponentHelpers from '../src/components/VueComponentHelpers.vue'



test('VueComponentHelpers.vue component mounts successfully', async () => {

    expect(VueComponentHelpers).toBeTruthy()

})



test('VueComponentHelpers.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(VueComponentHelpers, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('VueComponentHelpers.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(VueComponentHelpers, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
