import { html } from 'htm/preact'
import { FunctionComponent } from 'preact'
import { CloseBtn } from './close-btn.js'
import { GreenCheck } from './green-check.js'

export enum ToastType {
    success = 'success',
    error= 'error'
}

interface Props {
    onClose: (MouseEvent) => void
    type: ToastType
}

export const Toaster:FunctionComponent<Props> = function Toast (props) {
    const { type } = props
    const classes = `toast ${type}`
    const bodyClasses = `toast-body ${type}`

    return html`<div class=${classes}>
        <div class=${bodyClasses}>
            ${type === ToastType.success ?
                html`<span class="green-check">
                    <${GreenCheck} />
                </span>
                ${props.children}` :

                html`<span class="toast-body-content">
                    ${props.children}
                </span>`
            }

            <${CloseBtn} onClick=${props.onClose} />
        </div>
    </div>`
}

