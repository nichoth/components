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
    PencilButton,
    RadioGroup
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
import '../src/mobile-nav-menu.css'
import '../src/radio-group.css'

const Example:FunctionComponent<{}> = function () {
    const [resolving, setResolving] = useState<boolean>(false)

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
                <PencilButton onClick={(ev) => {
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
        </div>
    </div>)
}

render(<Example />, document.getElementById('root-preact')!)

function sleep (ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(null), ms)
    })
}
