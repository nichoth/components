import { FunctionComponent, render } from 'preact'
import { useState } from 'preact/hooks'
import Tonic from '@nichoth/tonic'
import { Button, CopyBtn } from '../src/preact/index.js'
import '../src/button.css'
import './example.css'
import '../src/copy-btn.css'

const Example:FunctionComponent<{}> = function () {
    const [resolving, setResolving] = useState<boolean>(false)

    async function clicker (ev) {
        ev.preventDefault()
        setResolving(true)
        await sleep(2000)
        setResolving(false)
    }

    return (<div className="preact-example">
        <h2>preact example</h2>
        <Button
            isSpinning={resolving}
            onClick={clicker}
        >
            example
        </Button>

        <div>
            <CopyBtn payload="copying things">copy</CopyBtn>
        </div>
    </div>)
}

render(<Example />, document.getElementById('root-preact')!)

class TonicExample extends Tonic {
    render () {
        // @ts-ignore
        return this.html`<div style="margin-top: 2rem">
            <hr />
            <h2>tonic example</h2>
        </div>`
    }
}

Tonic.add(TonicExample)

function sleep (ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(null), ms)
    })
}
