import { html } from 'htm/preact'
import { render, FunctionComponent } from 'preact'
import { useSignal } from '@preact/signals'
import {
    ButtonOutline,
    Primary as BtnOutlinePrimary
} from '../src/htm/button-outline.js'
import { EditableField } from '../src/htm/editable-field.js'
import { CopyBtn } from '../src/htm/copy-btn.js'
import { HamburgerWrapper } from '../src/htm/hamburger.js'
import { MobileNav } from '../src/htm/mobile-nav-menu.js'
import { NumberInput } from '../src/htm/number-input.js'
import { PencilBtn } from '../src/htm/pencil-btn.js'
import { TextInput } from '../src/htm/text-input.js'
import { RadioGroup } from '../src/htm/radio-group.js'
import { ReactiveForm } from '../src/htm/reactive-form.js'

const Example:FunctionComponent<{}> = function () {
    const hamburgerOpen = useSignal(false)
    const count = useSignal(3)

    function hamburgler () {
        hamburgerOpen.value = !hamburgerOpen.value
    }

    async function saver (value) {
        console.log('saving this...', value)
        await sleep(1000)
    }

    return html`<div>
        <${HamburgerWrapper} isOpen=${hamburgerOpen} onClick=${hamburgler}><//>

        <${MobileNav} isOpen=${hamburgerOpen}>
            <a className="app-nav" href="/example">Example</a>
            <a className="app-nav" href="/example2">Example2</a>
            <a className="app-nav" href="/example3">Example3</a>
        <//>

        <h2>htm/preact example</h2>

        <div>
            <h3>Button Outline</h3>
            <${ButtonOutline}
                onClick=${ev => {
                    ev.preventDefault()
                    console.log('click')
                    // if you return a promise, then the button
                    // will spin until it resolves
                    return sleep(2000)
                }}
            >
                example
            <//>
        </div>

        <div>
            <h3>Button Outline Primary</h3>
            <${BtnOutlinePrimary}
                onClick=${ev => {
                    ev.preventDefault()
                    console.log('click')
                    // if you return a promise, then the button
                    // will spin until it resolves
                    return sleep(2000)
                }}
            >
                example
            <//>
        </div>

        <div>
            <h3>Copy Btn</h3>
            <${CopyBtn} payload=${'copy this'}>copy this<//>
        </div>

        <div>
            <h3>Editable Field</h3>
            <${EditableField} name="editable-field" value="edit this"
                onSave=${saver}><//>
        </div>

        <div>
            <h3>Pencil Button</h3>
            <${PencilBtn} onClick=${(ev) => {
                // we are passed a click event
                ev.preventDefault()
                console.log('click')
            }}><//>
        </div>

        <div>
            <h3>Text Input</h3>
            <${TextInput}
                displayName="htm text input"
                required=${true}
                minLength=${3}
                maxLength=${7}
                name=${'htm-text-input'}
            ><//>
        </div>

        <div>
            <h3>Number Input</h3>
            <${NumberInput}
                min=${0}
                max=${7}
                name="test-input"
                value=${count}
                onIncrease=${() => {
                    console.log('increase')
                }}
                onDecrease=${() => {
                    console.log('decrease')
                }}
            ><//>
        </div>

        <div>
            <${RadioGroup}
                name="htm-test-radio"
                legend="testing htm radio group"
                options=${['aaa', 'bbb', 'ccc']}
                required=${true}
            ><//>
        </div>

        <div class="form-demo">
            <h3>Reactive Form</h3>
            <p>
                A <code>form</code> element that uses HTML attributes to
                check validity, and enables or disables the submit button
                as appropriate.
            </p>

            <${ReactiveForm}
                onSubmit=${async (ev:SubmitEvent) => {
                    ev.preventDefault()
                    const text = ((ev.target as HTMLFormElement)
                        .elements
                        .namedItem('text') as HTMLInputElement)

                    await sleep(2000)

                    console.log('resolved...', text.value)
                }}
            >
                <${TextInput}
                    required=${true}
                    displayName="Some text"
                    name="text"
                ><//>
            </${ReactiveForm}>
        </div>


    </div>`
}

render(html`<${Example}><//>`, document.getElementById('root-htm')!)

function sleep (ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(null), ms)
    })
}
