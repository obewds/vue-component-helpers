import { emptyElementTags } from '@obewds/vue-validators'

export default function(tag: string): boolean {

    const isEmptyElement = (emptyElementTags).includes(tag)

    if (isEmptyElement) {

        console.error('The <' + tag + '> tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component.')

        return true

    } else {

        return false

    }

}
