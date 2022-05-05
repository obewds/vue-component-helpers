// ./tests/get-border-palette-color.test.js


import { getBorderPaletteColor } from '../src/index'
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'


test('getBorderPaletteColor helper returns an expected default palette primary string', async () => {

    const extracted = getBorderPaletteColor(ObewdsTwConfig, 'default', 'primary')
    const initial = ObewdsTwConfig.border.palettes.default.colors.primary

    expect(extracted).toBe(initial)

})


test('getBorderPaletteColor helper returns an empty string if passed an empty config object', async () => {

    const extracted = getBorderPaletteColor({}, 'default', 'primary')

    expect(extracted).toEqual('')

})
