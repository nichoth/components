import { html } from "htm/preact"
import { FunctionComponent } from 'preact'

export const PencilButton:FunctionComponent<{
    className?:string
}> = function PencilButton (props) {
    const cl = props.className

    return html`<button ...${props}
        className="edit-pencil${cl ? (' ' + cl) : ''}"
    >
        <span role="img" aria-label="edit">✏</span>
    </button>`
}
