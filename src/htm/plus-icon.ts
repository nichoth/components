import { html } from 'htm/preact'
import { FunctionComponent } from 'preact'

export const PlusIcon:FunctionComponent = function () {
    return html`<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="5" width="4" height="22" />
        <rect x="27" y="14" width="4" height="22" transform="rotate(90 27 14)" />
    </svg>`
}
