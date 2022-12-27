// @ts-check
import { html } from 'htm/preact'

// `isOpen` is @preact/signal
export function MobileNav ({ navList, activeHref, isOpen }) {
    function active (link) {
        return link === activeHref ? 'active' : ''
    }

    console.log('isOpen', isOpen.value)

    function navClick () {
        isOpen.value = false
    }

    return html`<div class="mobile-nav-list${isOpen.value ? ' open' : ' closed'}">
        <ul>
            ${navList.map((item) => {
                return html`<li class="${active(item.href)}">
                    <a onclick=${navClick} href=${item.href}>${item.body}</a>
                </li>`
            })}
        </ul>
    </div>`
}

export default MobileNav
