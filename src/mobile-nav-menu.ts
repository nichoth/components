import { FunctionComponent, ComponentChildren } from 'preact'
import { Signal } from '@preact/signals'
import { html } from 'htm/preact'

interface Props {
    isOpen:Signal<boolean>,
    children:ComponentChildren[]
}

export const MobileNav:FunctionComponent<Props> = function (props) {
    const { isOpen, children } = props

    function navClick () {
        isOpen.value = false
    }

    return html`<div class="mobile-nav-list${isOpen.value ? ' open' : ' closed'}">
        <ul>
            ${children && children.map(el => {
                return html`<li onclick=${navClick}>
                    ${el}
                </li>`
            })}
        </ul>
    </div>`
}

export default MobileNav
