import { html } from 'htm/preact'
import { FunctionComponent, JSX } from 'preact'
import { Signal, useSignal } from '@preact/signals'

type HTMLCheckbox = Omit<HTMLInputElement, 'type'>

export const Checkbox:FunctionComponent<{
    checkedState?:Signal<boolean>;
} & JSX.HTMLAttributes<HTMLCheckbox>> = function (props) {
    let { checkedState, ..._props } = props
    if (!checkedState) checkedState = useSignal<boolean>(false)
    const classes = (['checkbox', props.class])
        .filter(Boolean).join(' ').trim()

    function onChange (ev) {
        const isChecked = ev.target.checked
        if (checkedState!.value !== isChecked) checkedState!.value = isChecked
        props.onChange && props.onChange(ev)
    }

    const containerClasses = ([
        'box-container',
        checkedState.value ? 'checked' : ''
    ]).filter(Boolean).join(' ')

    return html`<label class=${classes}>
        ${props.children}
        <span class=${containerClasses}>
            <${Svg} />
            <input
                ...${_props}
                checked=${checkedState}
                onChange=${onChange}
                class=${classes}
                type="checkbox"
            />
        </span>
    </label>`
}

export default Checkbox

function Svg () {
    return html`<svg height="1em" viewBox="0 0 512 512"><path d="M173.898 439.404L7.49824 273.004C-2.49876 263.007 -2.49876 246.798 7.49824 236.8L43.7012 200.596C53.6982 190.598 69.9082 190.598 79.9052 200.596L192 312.69L432.095 72.596C442.092 62.599 458.302 62.599 468.299 72.596L504.502 108.8C514.499 118.797 514.499 135.006 504.502 145.004L210.102 439.405C200.104 449.402 183.895 449.402 173.898 439.404V439.404Z"></path></svg>`
}
