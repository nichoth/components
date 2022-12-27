// @ts-check
import { render } from 'preact'
import { html } from 'htm/preact'
// import { useState } from 'preact/hooks'
import Hamburger from './hamburger.mjs'
import MobileNav from './mobile-nav-menu.mjs'
import { useSignal } from '@preact/signals'
import './hamburger.css'
import './mobile-nav-menu.css'
import './index.css'

const navList = [
    { body: 'test', href: '/test' },
    { body: 'fooo', href: '/fooo' }
]

const App = function App () {
    const mobileNav = useSignal(false)

    function mobileNavHandler (ev) {
        ev.preventDefault()
        mobileNav.value = !mobileNav.value
    }

    return html`<div class="app">
        <div class="mobile-nav${mobileNav.value ? ' open' : ''}">
            <${Hamburger} isOpen=${mobileNav} onClick=${mobileNavHandler} />
        </div>

        <${MobileNav} isOpen=${mobileNav} navList=${navList} />
    </div>`
}

const el = document.getElementById('root')
if (el) {
    render(html`<${App} />`, el)
}
