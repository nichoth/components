import { html } from 'htm/preact'
import { FunctionComponent } from 'preact'

interface Props extends HTMLElement {
    isSpinning:boolean;
    class?:string;
    onClick?:EventListener
}

const Button:FunctionComponent<Props> = function Button (props:Props) {
    return html`<span class="form-stuff ${props.class || ''}">
        ${props.isSpinning ?
            html`<button ...${props} class=${(props.class || '') + ' spinning'}
                onClick=${props.onClick}
                disabled=${true}
            >
                <span class="btn-content">${props.children}</span>
            </button>` :
            html`<button ${props}>
                <span class="btn-content">${props.children}</span>
            </button>`
        }
        </span>`
}

export { Button }
export default Button
