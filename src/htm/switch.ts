import { FunctionComponent } from 'preact'
import { html } from 'htm/preact'

export const Switch:FunctionComponent<{
    class:string;
    name:string;
}> = function (props) {
    const classes = (props.class ? props.class.split(' ') : [])
        .concat(['switch'])
        .filter(Boolean)
        .join(' ')

    const { name, ..._props } = props

    return html`<label ...${_props} class=${classes}>
        <input type="checkbox" name=${name} />
        ${props.children}
    </label>`
}
