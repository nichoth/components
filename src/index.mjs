// @ts-check
import { render } from 'preact'
import { html } from 'htm/preact'
import { useState } from 'preact/hooks'
import Hamburger from './hamburger.mjs'

const App = function App () {
    const [ mobileNav, setMobileNav ] = useState(false)

    function mobileNavHandler (ev) {
        ev.preventDefault()
        setMobileNav(!mobileNav)
    }

    return html` <div class="mobile-nav${mobileNav ? ' open' : ''}">
        <${Hamburger} isOpen=${mobileNav} onClick=${mobileNavHandler} />
    </div>`
}

const el = document.getElementById('root')
if (el) {
    render(html`<${App} />`, el)
}
