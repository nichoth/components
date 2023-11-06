import { FunctionComponent, render } from 'preact'
import { useState } from 'preact/hooks'
import './tonic.js'
import { useSignal } from '@preact/signals'
import {
    TextInput,
    Button,
    CopyBtn,
    CopyIconBtn,
    EditableField,
    PencilBtn,
    RadioGroup,
    NumberInput,
    ReactiveForm,
    ButtonOutline,
    ButtonOutlinePrimary
} from '../src/preact/index.js'
import { HamburgerWrapper } from '../src/preact/hamburger.jsx'
import MobileNav from '../src/preact/mobile-nav-menu.jsx'
import '../src/z-index.css'
import '../src/button.css'
import './example.css'
import '../src/copy-btn.css'
import '../src/editable-field.css'
import '../src/text-input.css'
import '../src/hamburger.css'
import '../src/pencil-btn.css'
import '../src/mobile-nav-menu.css'
import '../src/radio-group.css'
import '../src/number-input.css'
import '../src/button-outline.css'

const Example:FunctionComponent<{}> = function () {
    const [resolving, setResolving] = useState<boolean>(false)
    const count = useSignal(3)
    const hamburgerOpen = useSignal(false)

    function hamburgler () {
        hamburgerOpen.value = !hamburgerOpen.value
    }

    async function clicker (ev) {
        ev.preventDefault()
        setResolving(true)
        await sleep(2000)
        setResolving(false)
    }

    async function saver (value) {
        console.log('saving this...', value)
        await sleep(1000)
    }

    return (<div className="preact-example">
        <HamburgerWrapper isOpen={hamburgerOpen} onClick={hamburgler} />
        <MobileNav isOpen={hamburgerOpen}>
            <a className="app-nav" href="/example">Example</a>
            <a className="app-nav" href="/example2">Example2</a>
            <a className="app-nav" href="/example3">Example3</a>
        </MobileNav>

        <div id="content">
            <h2>preact example</h2>

            <h3>Button</h3>
            <Button
                isSpinning={resolving}
                onClick={clicker}
            >
                example
            </Button>

            <div>
                <h3>Button Outline</h3>
                <ButtonOutline
                    onClick={ev => {
                        ev.preventDefault()
                        console.log('click')
                        // if you return a promise, then the button
                        // will spin until it resolves
                        return sleep(2000)
                    }}
                >
                    example
                </ButtonOutline>
            </div>

            <div>
                <h3>Button Outline Primary</h3>
                <ButtonOutlinePrimary
                    onClick={ev => {
                        ev.preventDefault()
                        console.log('click')
                        // if you return a promise, then the button
                        // will spin until it resolves
                        return sleep(2000)
                    }}
                >
                    example
                </ButtonOutlinePrimary>
            </div>

            <div>
                <h3>Copy Btn</h3>
                <CopyBtn payload="copying things">copy</CopyBtn>
            </div>

            <div>
                <h3>Copy Icon Btn</h3>
                <span>
                    Copy this text
                    <CopyIconBtn payload="copy this text" />
                </span>
            </div>

            <div>
                <h3>Editable Field</h3>
                <EditableField name="editable-field" value="edit this"
                    onSave={saver} />
            </div>

            <div>
                <h3>Text Input</h3>
                <form className="example-form">
                    <TextInput name="text" displayName="Input test" />
                </form>
            </div>

            <div>
                <h3>Pencil Button</h3>
                <PencilBtn onClick={(ev) => {
                    // we are passed a click event
                    ev.preventDefault()
                    console.log('click')
                }} />
            </div>

            <div>
                <h3>Radio Group</h3>
                <RadioGroup name="test-radio" legend="testing radio group"
                    options={['aaa', 'bbb', 'ccc']} required={true}
                />
            </div>

            <div>
                <h3>Number Input</h3>
                <p>
                    A number input that does not go above the max or below the
                    min.
                </p>

                <NumberInput
                    min={0}
                    max={7}
                    name="test-input"
                    value={count}
                    onIncrease={() => {
                        console.log('increase')
                    }}
                    onDecrease={() => {
                        console.log('decrease')
                    }}
                />
            </div>

            <div class="form-demo">
                <h3>Reactive Form</h3>
                <p>
                    A <code>form</code> element that uses HTML attributes to
                    check validity, and enables or disables the submit button
                    as appropriate.
                </p>

                <ReactiveForm
                    onSubmit={async (ev:SubmitEvent) => {
                        ev.preventDefault()
                        const text = ((ev.target as HTMLFormElement)
                            .elements
                            .namedItem('text') as HTMLInputElement)

                        await sleep(2000)

                        console.log('resolved...', text.value)
                    }}
                >
                    <TextInput
                        required={true}
                        minLength={6}
                        maxLength={6}
                        displayName="text input"
                        name="text"
                    />
                </ReactiveForm>
            </div>
        </div>
    </div>)
}

render(<Example />, document.getElementById('root-preact')!)

function sleep (ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(null), ms)
    })
}
