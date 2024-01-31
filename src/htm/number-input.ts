import { html } from 'htm/preact'
import { FunctionComponent, JSX } from 'preact'
import { Signal } from '@preact/signals'

interface Props {
    name:string;
    min:number;
    max:number;
    class?:string;
    value:Signal<number>;
    onIncrease?:(ev:MouseEvent)=>any;
    onDecrease?:(ev:MouseEvent)=>any;
    onChange?:(ev:JSX.TargetedEvent)=>any;
}

export const NumberInput:FunctionComponent<Props> = function NumberInput (props) {
    const { name, min, max, onChange, value, onIncrease, onDecrease } = props
    const className = (props.class || '')
        .split(' ')
        .concat(['input-group-number'])
        .join(' ')

    return (html`<div class="${className}">
        <input type="number" inputMode="numeric"
            pattern="[0-9]*"
            max=${max}
            min=${min}
            onChange=${onChange}
            value=${value.value}
            name=${name}
        />

        <div class="number-nav">
            <div class="number-button number-up">
                <button onClick=${ev => {
                    ev.preventDefault()
                    if (value.value >= max) {
                        value.value = max
                        return onIncrease && onIncrease(ev)
                    }
                    value.value = value.value + 1
                    onIncrease && onIncrease(ev)
                }}>+</button>
            </div>

            <div class="number-button number-down">
                <button onClick=${ev => {
                    ev.preventDefault()
                    if (value.value <= min) {
                        value.value = min
                        return onDecrease && onDecrease(ev)
                    }
                    value.value = value.value - 1
                    onDecrease && onDecrease(ev)
                }}>-</button>
            </div>
        </div>
    </div>`)
}
