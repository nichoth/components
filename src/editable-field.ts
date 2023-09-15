import { html } from 'htm/preact'
import { FunctionComponent, JSX } from 'preact'
import { useState } from 'preact/hooks'
import { PencilButton } from './pencil-btn'

interface Props extends JSX.HTMLAttributes<HTMLInputElement> {
    onSave:(value:string) => Promise<any>
    name:string
}

export const EditableField:FunctionComponent<Props> = function EditableField (props:Props) {
    const { value, onSave, name } = props
    const [isEditing, setEditing] = useState(false)
    const [isResolving, setResolving] = useState(false)

    function _setEditing (ev) {
        ev.preventDefault()
        setEditing(true)
    }

    function stopEditing (ev) {
        ev.preventDefault()
        setEditing(false)
    }

    async function _onSave (ev) {
        ev.preventDefault()
        const val = ev.target.elements[name].value
        setResolving(true)

        await onSave(val)
        setResolving(false)
        setEditing(false)
    }

    const _class = 'editable-field' +
        (isResolving ? ' resolving' : '') +
        (props.className ? (' ' + props.className) : '')

    if (isEditing) {
        return html`<form onreset=${stopEditing}
            onsubmit=${_onSave}
            class=${_class}
        >
            <input name=${name} id=${name} placeholder="${value}" />
            <button type="reset" disabled=${isResolving}>cancel</button>
            <button type="submit" disabled=${isResolving}>save</button>
        </form>`;
    }

    return html`
        <span class="field">${value}</span>

        <!-- pencil emoji -->
        <${PencilButton} onClick=${_setEditing} title="edit" />
    `
}
