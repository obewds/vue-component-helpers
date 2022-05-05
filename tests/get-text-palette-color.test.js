// ./tests/get-text-palette-color.test.js


import { getTextPaletteColor } from '../src/index'
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'


test('getTextPaletteColor helper returns an expected default palette primary string', async () => {

    const extracted = getTextPaletteColor(ObewdsTwConfig, 'default', 'primary')
    const initial = ObewdsTwConfig.text.palettes.default.colors.primary

    expect(extracted).toBe(initial)

})


test('getTextPaletteColor helper returns an empty string if passed an empty config object', async () => {

    const extracted = getTextPaletteColor({}, 'default', 'primary')

    expect(extracted).toEqual('')

})
