import { ObewdsTwConfig } from '@obewds/obewds-tw-config'

type ObewdsTwConfigType = typeof ObewdsTwConfig

export default function(config: ObewdsTwConfigType | undefined, palette: string, color: string) {

    if ( config && config?.text?.palettes?.[palette]?.colors?.[color] ) {

        return config.text.palettes[palette].colors[color]

    } else {

        return ''

    }

}
