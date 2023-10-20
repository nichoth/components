import Tonic from '@nichoth/tonic'
import { SpinningButton } from '../src/tonic/spinning-button.js'
import { CopyBtn, CopyIconBtn } from '../src/tonic/copy-btn.js'
import { HamburgerWrapper, HamburgerBody } from '../src/tonic/hamburger.js'
import { MobileNav } from '../src/tonic/mobile-nav-menu.js'
import { signal, effect } from '@preact/signals'

export class TonicExample extends Tonic {
    state = { isSpinning: false, isOpen: signal(false) }

    constructor () {
        super()
        let isOpen = this.state.isOpen.value
        effect(() => {
            if (this.state.isOpen.value !== isOpen) {
                isOpen = this.state.isOpen.value
                this.reRender()
            }
        })
    }

    async click (ev) {
        ev.preventDefault()
        const el = Tonic.match(ev.target, '[data-event]')
        if (!el || el.dataset.event !== 'click-the-button') {
            return
        }

        this.state.isSpinning = true
        this.reRender()

        await sleep(2000)

        this.state.isSpinning = false
        this.reRender()
    }

    render () {
        // @ts-ignore
        return this.html`<div style="margin-top: 2rem">
            <hr />
            <h2>tonic example</h2>
            <hamburger-wrapper
                isopen=${this.state.isOpen}
                id="tonic-hamburger">
            </hamburger-wrapper>

            <mobile-nav isopen=${this.state.isOpen}>
                <a className="app-nav" href="/example">Example</a>
                <a className="app-nav" href="/example2">Example2</a>
                <a className="app-nav" href="/example3">Example3</a>
            </mobile-nav>

            <h3>Spinning Button</h3>
            <spinning-button
                isSpinning=${this.state.isSpinning}
                data-event="click-the-button"
            >
                click here
            </spinning-button>

            <div>
                <h3>Copy Button</h3>
                <copy-btn payload="example copy">copy something</copy-btn>
            </div>

            <div>
                <h3>Copy Icon Button</h3>
                <span>
                    This is an example
                    <copy-icon-btn payload="this is an example"></copy-icon-btn>
                </span>
            </div>
        </div>`
    }
}

Tonic.add(MobileNav)
Tonic.add(SpinningButton)
Tonic.add(TonicExample)
Tonic.add(CopyBtn)
Tonic.add(CopyIconBtn)
Tonic.add(HamburgerWrapper)
Tonic.add(HamburgerBody)

function sleep (ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(null), ms)
    })
}