import { unsupportedElementTags } from '@obewds/vue-validators'

export default function(tag: string): boolean {

    const isUnsupportedElement = (unsupportedElementTags).includes(tag)

    if (isUnsupportedElement) {

        console.error('The <' + tag + '> element tag is not supported for rendering by this component.')

        return true

    } else {

        return false

    }

}
