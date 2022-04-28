import { isEmptyElement } from '../index'
import { isUnsupportedElement } from '../index'

export default function(tag: string): boolean {

    const isTagEmpty = isEmptyElement(tag)

    const isTagUnsupported = isUnsupportedElement(tag)

    return (isTagEmpty || isTagUnsupported) ? true : false

}
