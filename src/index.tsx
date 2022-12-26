// @ts-check
import { render } from 'preact'
import { html } from 'htm/preact'

const App = function App () {
    return html`<div class="testing">
        <p>hello</p>
    </div>`
}

const el = document.getElementById('root')
if (el) {
    render(html`<${App} />`, el)
}
