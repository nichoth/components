import { html } from 'htm/preact'
import { FunctionComponent, JSX } from 'preact'
import { Signal } from '@preact/signals'

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
    isSpinning:Signal<boolean>;
    onClick?:EventListener
}

const Button:FunctionComponent<Props> = function Button (props:Props) {
    const { isSpinning, ..._props } = props
    const classes = (['btn', props.class, isSpinning.value ? 'spinning' : ''])
        .join(' ').trim()

    async function click (ev:MouseEvent) {
        if (props.onClick) {
            isSpinning.value = true
            await props.onClick(ev)
            isSpinning.value = false
        }
    }

    return html`<button
        ...${_props}
        onClick=${props.onClick ? click : null}
        class=${classes}
    >
        <span class="btn-content">${props.children}</span>
    </button>`
}

export { Button }
export default Button
