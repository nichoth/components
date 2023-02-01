// @ts-check
import { render } from 'preact'
import { html } from 'htm/preact'
import { useSignal } from '@preact/signals'
import HamburgerWrapper from './hamburger.mjs'
import MobileNav from './mobile-nav-menu.mjs'
import { CopyBtn, CopyIconBtn } from './copy-btn.ts'
import './copy-btn.css'
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

        <${CopyBtn} payload=${'hurray'}>copy something<//>

        <p>Copy this <${CopyIconBtn} payload=${'Copy this'}><//></p>
    </div>`
}

const el = document.getElementById('root')
if (el) render(html`<${App} />`, el)
