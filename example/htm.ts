import { html } from 'htm/preact'
import { render, FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import { useSignal } from '@preact/signals'
import {
    ButtonOutline,
    Primary as BtnOutlinePrimary
} from '../src/htm/button-outline.js'
import { EditableField } from '../src/htm/editable-field.js'
import { CopyBtn } from '../src/htm/copy-btn.js'
import { HamburgerWrapper } from '../src/htm/hamburger.js'
import { WavyHr } from '../src/htm/hr.js'
import { MobileNav } from '../src/htm/mobile-nav-menu.js'
import { NumberInput } from '../src/htm/number-input.js'
import { PencilBtn } from '../src/htm/pencil-btn.js'
import { TextInput } from '../src/htm/text-input.js'
import { RadioGroup } from '../src/htm/radio-group.js'
import { ReactiveForm } from '../src/htm/reactive-form.js'
import { Toaster } from '../src/htm/toast.js'
import { Accordion } from '../src/htm/accordion.js'
import Button from '../src/htm/button.js'
import { ButtonLink } from '../src/htm/button-link.js'
import { Switch } from '../src/htm/switch.js'
import '../src/button-outline.css'
import '../src/variables.css'
import '../src/toast.css'
import '../src/close-btn.css'
import '../src/accordion.css'
import '../src/switch.css'

const Example:FunctionComponent<{}> = function () {
    const hamburgerOpen = useSignal(false)
    const isSpinning = useSignal(false)
    const count = useSignal(3)
    const [toasting, setToasting] = useState(true)

    function hamburgler () {
        hamburgerOpen.value = !hamburgerOpen.value
    }

    async function saver (value) {
        console.log('saving this...', value)
        await sleep(1000)
    }

    function closeToast (ev:MouseEvent) {
        ev.preventDefault()
        setToasting(false)
    }

    // const arrayChildren = Children.toArray(children);

    return html`<div>
        <${HamburgerWrapper} isOpen=${hamburgerOpen} onClick=${hamburgler}><//>

        <${MobileNav} isOpen=${hamburgerOpen}>
            <a className="app-nav" href="/example">Example</a>
            <a className="app-nav" href="/example2">Example2</a>
            <a className="app-nav" href="/example3">Example3</a>
        <//>

        <h2>htm/preact example</h2>

        <div id="switch">
            <h3>switch</h3>
            <p>Switch example</p>
            
            <form
                onSubmit=${ev => {
                    ev.preventDefault()
                    const el = ev.target.elements['test-switch']
                    console.log('el.checked', el.checked)
                }}>
                    <${Switch} name="test-switch" />

                    <button type="submit">submit</button>
            </form>
        </div>

        <div id="accordion">
            <h3>Accordion</h3>
            <p>
                Use the <code>Accordion</code> component with nested <code>
                summary</code> and <code>p</code> elements.
            </p>

            <${Accordion}>
                <summary>Trying accordion example</summary>
                <div>
                    <p>
                        This is the nested paragraph element in the accordion demo
                    </p>
                    <p>some more writing</p>
                    <p>some more writing</p>
                    <p>some more writing</p>
                    <p>some more writing</p>
                    <p>some more writing</p>
                    <p>some more writing</p>
                </div>
            <//>

            <h3>Button</h3>

            <p>
                If the click event handler returns a promise, then the button
                will spin until the promise resolves.
            </p>

            <${Button}
                isSpinning=${isSpinning}
                onClick=${(ev) => {
                    ev.preventDefault()
                    console.log('click')
                    return sleep(2000)
                }}
            >Button example<//>
        </div>

        <div>
            <h3>Button Link</h3>
            <p>A link that looks like a button</p>
            <${ButtonLink} href="#">Button link<//>
        </div>

        <div>
            <h3>Button Outline</h3>

            <p>
                Return a promise from <code>onClick</code> to set & unset
                resolving state.
            </p>

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
            <p>
                Return a promise from <code>onClick</code> to set & unset
                resolving state.
            </p>

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
                <h3>Wavy Hr</h3>
                <${WavyHr} />
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
                title="At least 3 letters, but less than 7"
                data-title="I bla bla"
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

        <div>
            <h3>Toast</h3>
            ${toasting ?
                html`<${Toaster} type="success" onClose=${closeToast}>
                    Successful toasting
                <//>` :
                null
            }
        </div>

        <div class="form-demo" id="reactive-form">
            <h3>Reactive Form</h3>
            <p>
                A <code>form</code> element that uses HTML attributes to
                check validity, and enables or disables the submit button
                as appropriate.
            </p>

            <ul>
                <li>
                    Resolving state is set by returning a promise from the
                    <code> onSubmit</code> handler.
                </li>
                <li>
                    Use a <code>title</code> attribute to provide an error message
                    below the input when you focus away.
                </li>
            </ul>

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
                <div>
                    Length must equal 6
                </div>
                <${TextInput}
                    title="Length must equal 6"
                    required=${true}
                    minLength=${6}
                    maxLength=${6}
                    required=${true}
                    displayName="Some text"
                    name="text"
                ><//>
            </${ReactiveForm}>
        </div>
    </div>`
}

render(html`<${Example} />`, document.getElementById('root-htm')!)

function sleep (ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(null), ms)
    })
}
