// ./tests/valid-palette-props.test.js


import { validPaletteProps } from '../src/index'
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'


test('validPaletteProps() helper returns an array of default bg palette name strings from the default ObewdsTwConfig config data', async () => {
    
    const paletteNames = validPaletteProps('bg', ObewdsTwConfig)

    expect(paletteNames).toContain('console')
    expect(paletteNames).toContain('default')
    expect(paletteNames).toContain('monochromatic')
    expect(paletteNames).toContain('pastel')

})


test('validPaletteProps() helper returns an array of default bg palette name strings when passed an empty config data object', async () => {
    
    const paletteNames = validPaletteProps('bg', {})

    expect(paletteNames).toContain('console')
    expect(paletteNames).toContain('default')
    expect(paletteNames).toContain('monochromatic')
    expect(paletteNames).toContain('pastel')

})


test('validPaletteProps() helper returns an array of user defined bg palette name strings', async () => {
    
    let testConfig = {
        bg: {
            palettes: {
                test: {
                    colors: {
                        testy: 'test-color'
                    }
                },
                secondTest: {
                    colors: {
                        testy: 'test-classes'
                    }
                }
            }
        }
    }
    
    const paletteNames = validPaletteProps('bg', testConfig)

    expect(paletteNames).toContain('test')
    expect(paletteNames).toContain('secondTest')

})
