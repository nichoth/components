import { html } from 'htm/preact'
import { FunctionComponent, JSX } from 'preact'

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
    isSpinning:boolean;
    onClick?:EventListener
}

const Button:FunctionComponent<Props> = function Button (props:Props) {
    const { isSpinning, ..._props } = props
    const classes = ['btn', props.class].join(' ').trim()
    const spinningClass = (classes + ' spinning').trim()

    return (isSpinning ?
        (html`<button
            ...${_props}
            class=${spinningClass}
            onClick=${props.onClick}
            disabled=${true}
        >
            <span class="btn-content">${props.children}</span>
        </button>`) :

        (html`<button
            ...${_props}
            class=${classes}
        >
            <span class="btn-content">${props.children}</span>
        </button>`))
}

export { Button }
export default Button
