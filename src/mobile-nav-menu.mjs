// @ts-check
import { html } from 'htm/preact'

// `isOpen` is @preact/signal
export function MobileNav (props) {
    const { isOpen, children } = props

    function navClick () {
        isOpen.value = false
    }

    return html`<div class="mobile-nav-list${isOpen.value ? ' open' : ' closed'}">
        <ul>
            ${children.map(el => {
                return html`<li onclick=${navClick}>
                    ${el}
                </li>`
            })}
        </ul>
    </div>`
}

export default MobileNav
