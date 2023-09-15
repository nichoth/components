// @ts-check
import { render } from 'preact'
import { useState } from 'preact/hooks'
import { html } from 'htm/preact'
import { useSignal } from '@preact/signals'
import { Button } from './button.js'
import HamburgerWrapper from './hamburger.js'
import MobileNav from './mobile-nav-menu.js'
import { CopyBtn, CopyIconBtn } from './copy-btn.js'
import './copy-btn.css'
import './hamburger.css'
import './mobile-nav-menu.css'
import './button.css'
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

        <${ClickingDemo} />
    </div>`
}

function ClickingDemo () {
    const [resolving, setResolving] = useState(false)

    function doSomething (ev) {
        console.log('hey')
        ev.preventDefault()
        setResolving(true)
        // 3 second delay
        setTimeout(() => setResolving(false), 3000)
    }

    return html`<div class="clicking-demo">
        <${Button} onClick=${doSomething} isSpinning=${resolving}>
            do something
        </${Button}>
    </div>`
}

render(html`<${App} />`, document.getElementById('root')!)
