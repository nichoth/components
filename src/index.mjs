// @ts-check
import { render } from 'preact'
import { html } from 'htm/preact'
import HamburgerWrapper from './hamburger.mjs'
import MobileNav from './mobile-nav-menu.mjs'
import { useSignal } from '@preact/signals'
import './hamburger.css'
import './mobile-nav-menu.css'
import './z-index.css'

const App = function App () {
    const isOpen = useSignal(false)

    function mobileNavHandler (ev) {
        ev.preventDefault()
        isOpen.value = !isOpen.value
    }

    return html`<div class="app">
        <${HamburgerWrapper} isOpen=${isOpen} onClick=${mobileNavHandler} />
        <${MobileNav} isOpen=${isOpen}>
            <a href="/baloney">baloney</a>
            <a href="/test">testing</a>
        <//>
    </div>`
}

const el = document.getElementById('root')
if (el) render(html`<${App} />`, el)
