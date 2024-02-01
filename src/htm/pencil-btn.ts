import { FunctionComponent } from 'preact'
import { html } from 'htm/preact'

export const PencilBtn:FunctionComponent<{
    class?:string;
    title?:string;
    onClick:(ev:MouseEvent)=>any;
}> = function PencilButton (props) {
    const classes = ['edit-pencil', props.class].filter(Boolean).join(' ').trim()

    return (html`<button ...${props}
        className="${classes}"
    >
        <span role="img" aria-label="edit">✏</span>
    </button>`)
}
