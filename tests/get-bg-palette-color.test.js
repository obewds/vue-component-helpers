// ./tests/get-bg-palette-color.test.js


import { getBgPaletteColor } from '../src/index'
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'


test('getBgPaletteColor helper returns an expected default palette primary string', async () => {

    const extracted = getBgPaletteColor(ObewdsTwConfig, 'default', 'primary')
    const initial = ObewdsTwConfig.bg.palettes.default.colors.primary

    expect(extracted).toBe(initial)

})


test('getBgPaletteColor helper returns an empty string if passed an empty config object', async () => {

    const extracted = getBgPaletteColor({}, 'default', 'primary')

    expect(extracted).toEqual('')

})
