import { FunctionComponent, render } from 'preact'
import Tonic from '@nichoth/tonic'

const Example:FunctionComponent<{}> = function () {
    return (<div className="preact-eexample">
        hello
    </div>)
}

render(<Example />, document.getElementById('root-preact')!)

class TonicExample extends Tonic {
    render () {
        // @ts-ignore
        return this.html`<div>hello</div>`
    }
}

Tonic.add(TonicExample)
