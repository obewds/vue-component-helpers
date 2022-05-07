import { ObewdsTwConfig } from '@obewds/obewds-tw-config'
import { ObewdsTwConfigGroups } from '@obewds/obewds-tw-config'

type ObewdsTwConfigType = typeof ObewdsTwConfig
type DesignSystemKeys = typeof ObewdsTwConfigGroups[number]

export default function(tw: ObewdsTwConfigType, key: DesignSystemKeys ): string[] {

    let output: string[] = []
    
    if (tw && tw[key] && tw[key].palettes) {

        output = Object.keys(tw[key].palettes).map( (key) => key )

    }

    return output

}
