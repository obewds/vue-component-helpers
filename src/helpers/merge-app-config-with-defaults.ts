import merge from 'deepmerge'
import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

export default function(appTwConfig: typeof ObewdsTwConfig): typeof ObewdsTwConfig {

    return Object.keys( appTwConfig ).length > 0 ? merge( ObewdsTwConfig, appTwConfig ) : ObewdsTwConfig

}
