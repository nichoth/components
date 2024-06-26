import Tonic from '@nichoth/tonic'
import { signal } from '@preact/signals'
import { SpinningButton } from '../src/tonic/spinning-button.js'
import { CopyBtn, CopyIconBtn } from '../src/tonic/copy-btn.js'
import { HamburgerWrapper, HamburgerBody } from '../src/tonic/hamburger.js'
import { MobileNav } from '../src/tonic/mobile-nav-menu.js'
import { NumberInput } from '../src/tonic/number-input.js'
import { PencilBtn } from '../src/tonic/pencil-btn.js'
import { RadioGroup } from '../src/tonic/radio-group.js'
import { WavyHr } from '../src/tonic/wavy-hr.js'
import { AccordionElement } from '../src/tonic/accordion.js'
import { PlusIcon } from '../src/tonic/plus-icon.js'

export class TonicExample extends Tonic {
    state = {
        isSpinning: false,
        isOpen: signal(false),
        numberExample: signal(3)
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
        return this.html`<div style="margin-top: 2rem">
            <hr />
            <h2 class="tonic-example">tonic example</h2>
            <hamburger-wrapper isopen=${this.state.isOpen} id="tonic-hamburger"></hamburger-wrapper>

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
                <h3>Wavy Hr</h3>
                <wavy-hr />
            </div>

            <div>
                <h3>Accordion Element</h3>
                <accordion-element>
                    <summary>Trying accordion example</summary>
                    <p>This is the nested paragraph element in the accordion demo</p>
                </accordion-element>
            </div>

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

            <div>
                <h3>Number Input</h3>
                <p>
                    A number input that does not go above the max or below the
                    min. Takes <code>{ value:Signal<number> }</code> as a prop for
                    the value.
                </p>

                <number-input
                    name="number-example"
                    min=3
                    max=7
                    value=${this.state.numberExample}
                ></number-input>
            </div>

            <div class="pencil">
                <h3>Pencil Button</h3>
                <pencil-btn></pencil-btn>
            </div>

            <div>
                <h3>Radio Group</h3>
                <radio-group
                    name="test-radios"
                    legend="radio test"
                    required=${false}
                    options=${['aaa', 'bbb', 'ccc']}
                ></radio-group>
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
Tonic.add(NumberInput)
Tonic.add(PencilBtn)
Tonic.add(RadioGroup)
Tonic.add(WavyHr)
Tonic.add(AccordionElement)
Tonic.add(PlusIcon)

function sleep (ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(null), ms)
    })
}
