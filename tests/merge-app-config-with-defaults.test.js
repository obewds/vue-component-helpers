// ./tests/merge-app-config-with-defaults.test.js


import { mergeAppConfigWithDefaults } from '../src/index'
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'


test('mergeAppConfigWithDefaults helper returns a default ObewdsTwConfig object if passed and empty app config object', async () => {

    const appConfig = {}
    const mergedResult = mergeAppConfigWithDefaults(appConfig)

    expect(mergedResult).toBe(ObewdsTwConfig)

})


test('mergeAppConfigWithDefaults helper returns the passed app config object - merged with default config data without being overwritten', async () => {

    const appConfig = {
        bg: {
            palettes: {
                default: {
                    colors: {
                        primary: 'test-class another-test-class'
                    }
                }
            }
        }
    }
    const mergedResult = mergeAppConfigWithDefaults(appConfig)

    expect(mergedResult.bg.palettes.default.colors.primary).toContain(appConfig.bg.palettes.default.colors.primary)

})
