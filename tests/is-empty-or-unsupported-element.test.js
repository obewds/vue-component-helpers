// ./tests/is-empty-or-unsupported-element.test.js

import { blockLevelElementTags } from '@obewds/vue-validators'
import { emptyElementTags } from '@obewds/vue-validators'
import { inlineLevelElementTags } from '@obewds/vue-validators'
import { isEmptyOrUnsupportedElement } from '../src/index'
import { unsupportedElementTags } from '@obewds/vue-validators'



test('isEmptyOrUnsupportedElement helper returns true for all empty & unsupported element tags', async () => {

    emptyElementTags.forEach( (tag) => {
        const isEmptyOrUnsupportedEl = isEmptyOrUnsupportedElement(tag)
        expect(isEmptyOrUnsupportedEl).toBeTruthy()
    })

    unsupportedElementTags.forEach( (tag) => {
        const isEmptyOrUnsupportedEl = isEmptyOrUnsupportedElement(tag)
        expect(isEmptyOrUnsupportedEl).toBeTruthy()
    })

})



test('isEmptyOrUnsupportedElement helper returns false for all block and inline level element tags', async () => {

    blockLevelElementTags.forEach( (tag) => {
        const isEmptyOrUnsupportedEl = isEmptyOrUnsupportedElement(tag)
        expect(isEmptyOrUnsupportedEl).toBe(false)
    })

    inlineLevelElementTags.forEach( (tag) => {
        const isEmptyOrUnsupportedEl = isEmptyOrUnsupportedElement(tag)
        expect(isEmptyOrUnsupportedEl).toBe(false)
    })

})
