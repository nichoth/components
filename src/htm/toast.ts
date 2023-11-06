import { html } from 'htm/preact'
import { FunctionComponent } from 'preact'
import { CloseBtn } from './close-btn.js'
import { GreenCheck } from './green-check.js'
import './toast.css'

export enum ToastType {
    success = 'success',
    error= 'error'
}

interface Props {
    onClose: (MouseEvent) => void
    type: ToastType
}

export const Toast:FunctionComponent<Props> = function Toast (props) {
    const { type } = props

    return html`<div class="toast ${type}">
        <div class="toast-body ${type}">
            ${type === ToastType.success ?
                html`<span class="green-check">
                    <${GreenCheck} />
                </span>
                ${props.children}` :

                html`<span className="toast-body-content">
                    ${props.children}
                </span>`
            }

            <${CloseBtn} onClick={props.onClose} />
        </div>
    </div>`
}

