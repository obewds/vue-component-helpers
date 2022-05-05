import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

type ObewdsTwConfigType = typeof ObewdsTwConfig

export default function(config: ObewdsTwConfigType | undefined, palette: string, color: string): string {

    if ( config && config?.border?.palettes?.[palette]?.colors?.[color] ) {

        return config.border.palettes[palette].colors[color]

    } else {

        return ''

    }

}
