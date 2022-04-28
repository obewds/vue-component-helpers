import { unsupportedElementTags } from '@obewds/vue-validators'

export default function(tag: string): boolean {

    const t = (tag).toLowerCase()

    const isUnsupportedElement = (unsupportedElementTags).includes(t)

    if (isUnsupportedElement) {

        console.error('The <' + tag + '> element tag is not supported for rendering by this component.')

        return true

    } else {

        return false

    }

}
