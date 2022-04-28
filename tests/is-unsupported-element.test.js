// ./tests/is-unsupported-element.test.js

import { blockLevelElementTags } from '@obewds/vue-validators'
import { emptyElementTags } from '@obewds/vue-validators'
import { inlineLevelElementTags } from '@obewds/vue-validators'
import { isUnsupportedElement } from '../src/index'
import { unsupportedElementTags } from '@obewds/vue-validators'



test('isUnsupportedElement helper returns true for all unsupported element tags', async () => {

    unsupportedElementTags.forEach( (tag) => {
        const isUnsupportedEl = isUnsupportedElement(tag)
        expect(isUnsupportedEl).toBeTruthy()
    })

})



test('isUnsupportedElement helper returns false for all block level element tags', async () => {

    blockLevelElementTags.forEach( (tag) => {
        const isUnsupportedEl = isUnsupportedElement(tag)
        expect(isUnsupportedEl).toBe(false)
    })

})



test('isUnsupportedElement helper returns false for all inline level element tags', async () => {

    inlineLevelElementTags.forEach( (tag) => {
        const isUnsupportedEl = isUnsupportedElement(tag)
        expect(isUnsupportedEl).toBe(false)
    })

})
