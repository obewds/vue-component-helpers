import { ObewdsTwConfig, ObewdsTwConfigGroups } from '@obewds/obewds-tw-config'

type ObewdsTwConfigType = typeof ObewdsTwConfig
type DesignSystemKeys = typeof ObewdsTwConfigGroups[number]

export default function(key: DesignSystemKeys | string, twConfig: ObewdsTwConfigType): string[] {

    let tw = Object.keys( twConfig ).length > 0 ? twConfig : ObewdsTwConfig

    let array: string[] = []
    
    if (tw && tw[key] && tw[key].palettes) {

        array = Object.keys(tw[key].palettes).map( (key) => key )

    }

    return array

}
