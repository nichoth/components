import { FunctionComponent } from 'preact'

export const PencilButton:FunctionComponent<{
    className?:string;
    title?:string;
    onClick:(ev:MouseEvent)=>any;
}> = function PencilButton (props) {
    const cl = props.className

    return (<button {...props}
        className={'edit-pencil' + (cl ? (' ' + cl) : '')}
    >
        <span role="img" aria-label="edit">✏</span>
    </button>)
}
