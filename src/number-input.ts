import { html } from 'htm/preact'
import { FunctionComponent } from 'preact'

interface Props {
    name:string,
    min:number,
    max:number,
    onChange?:(ev:InputEvent) => any,
    value:number,
    onIncrease:(ev:InputEvent) => any
    onDecrease:(ev:InputEvent) => any
}

export const NumberInput:FunctionComponent<Props> = function NumberInput (props) {
    const { name, min, max, onChange, value, onIncrease, onDecrease } = props

    return html`<div class="form-stuff">
        <div class="input-group-number">
            <input type="number" inputmode="numeric"
                pattern="[0-9]*"
                max="${max}"
                min=${min}
                onchange=${onChange}
                value=${value}
                name=${name}
            />
            <div class="number-nav">
                <div class="number-button number-up">
                    <button onclick="${ev => {
                        ev.preventDefault()
                        onIncrease(ev)
                    }}">+</button>
                </div>

                <div class="number-button number-down">
                    <button onclick="${ev => {
                        ev.preventDefault()
                        onDecrease(ev)
                    }}">-</button>
                </div>
            </div>
        </div>
    </div>`
}
