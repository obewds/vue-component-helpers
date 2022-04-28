// ./tests/is-empty-element.test.js

import { blockLevelElementTags } from '@obewds/vue-validators'
import { emptyElementTags } from '@obewds/vue-validators'
import { inlineLevelElementTags } from '@obewds/vue-validators'
import { isEmptyElement } from '../src/index'



test('isEmptyElement helper returns true for all empty element tags', async () => {

    emptyElementTags.forEach( (tag) => {
        const isEmptyEl = isEmptyElement(tag)
        expect(isEmptyEl).toBeTruthy()
    })

})



test('isEmptyElement helper returns false for all block level element tags', async () => {

    blockLevelElementTags.forEach( (tag) => {
        const isEmptyEl = isEmptyElement(tag)
        expect(isEmptyEl).toBe(false)
    })

})



test('isEmptyElement helper returns false for all inline level element tags', async () => {

    inlineLevelElementTags.forEach( (tag) => {
        const isEmptyEl = isEmptyElement(tag)
        expect(isEmptyEl).toBe(false)
    })

})
