import { html } from 'htm/preact'
import { FunctionComponent, JSX } from 'preact'
import { Signal, useSignal } from '@preact/signals'

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
    isSpinning?:Signal<boolean>;
    onClick?:EventListener
}

const Button:FunctionComponent<Props> = function Button (props:Props) {
    const { isSpinning: _isSpinning, ..._props } = props
    const isSpinning = _isSpinning || useSignal<boolean>(false)
    const classes = (['btn', props.class, isSpinning.value ? 'spinning' : ''])
        .filter(Boolean).join(' ').trim()

    async function click (ev:MouseEvent) {
        if (props.onClick) {
            isSpinning.value = true
            await props.onClick(ev)
            isSpinning.value = false
        }
    }

    return html`<button
        ...${_props}
        onClick=${click}
        disabled=${isSpinning.value || _props.disabled}
        class=${classes}
    >
        <span class="btn-content">${props.children}</span>
    </button>`
}

export { Button }
export default Button
