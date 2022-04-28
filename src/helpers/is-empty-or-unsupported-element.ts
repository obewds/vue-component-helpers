import { isEmptyElement } from '../index'
import { isUnsupportedElement } from '../index'

export default function(tag: string): boolean {

    const t = (tag).toLowerCase()
    
    const isTagEmpty = isEmptyElement(t)

    const isTagUnsupported = isUnsupportedElement(t)

    return (isTagEmpty || isTagUnsupported) ? true : false

}
