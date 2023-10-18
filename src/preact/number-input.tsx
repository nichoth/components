import { FunctionComponent, JSX } from 'preact'

interface Props {
    name:string;
    min:number;
    max:number;
    value:number;
    onIncrease:(ev:MouseEvent)=>any;
    onDecrease:(ev:MouseEvent)=>any;
    onChange?:(ev:JSX.TargetedEvent)=>any;
}

export const NumberInput:FunctionComponent<Props> = function NumberInput (props) {
    const { name, min, max, onChange, value, onIncrease, onDecrease } = props

    return (<div class="form-stuff">
        <div class="input-group-number">
            <input type="number" inputMode="numeric"
                pattern="[0-9]*"
                max={max}
                min={min}
                onChange={onChange}
                value={value}
                name={name}
            />

            <div class="number-nav">
                <div class="number-button number-up">
                    <button onClick={ev => {
                        ev.preventDefault()
                        onIncrease(ev)
                    }}>+</button>
                </div>

                <div class="number-button number-down">
                    <button onClick={ev => {
                        ev.preventDefault()
                        onDecrease(ev)
                    }}>-</button>
                </div>
            </div>
        </div>
    </div>)
}
