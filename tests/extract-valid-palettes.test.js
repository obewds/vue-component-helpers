// ./tests/extract-valid-palettes.test.js


import { extractValidPalettes } from '../src/index'
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'


/*
test('extractValidPalettes helper returns an expected array of anchor palette name strings from the default ObewdsTwConfig config data', async () => {

    const extracted = extractValidPalettes(ObewdsTwConfig, 'anchor')

    extracted.forEach( (value) => {
        expect(ObewdsTwConfig.text.palettes[anchor]).toBeDefined()
    })

})
*/


test('extractValidPalettes helper returns an expected array of bg palette name strings from the default ObewdsTwConfig config data', async () => {

    const extracted = extractValidPalettes(ObewdsTwConfig, 'bg')

    extracted.forEach( (value) => {
        expect(ObewdsTwConfig.bg.palettes[value]).toBeDefined()
    })

})


test('extractValidPalettes helper returns an expected array of border palette name strings from the default ObewdsTwConfig config data', async () => {

    const extracted = extractValidPalettes(ObewdsTwConfig, 'border')

    extracted.forEach( (value) => {
        expect(ObewdsTwConfig.border.palettes[value]).toBeDefined()
    })

})


test('extractValidPalettes helper returns an expected array of text palette name strings from the default ObewdsTwConfig config data', async () => {

    const extracted = extractValidPalettes(ObewdsTwConfig, 'text')

    extracted.forEach( (value) => {
        expect(ObewdsTwConfig.text.palettes[value]).toBeDefined()
    })

})
