import { FunctionComponent, JSX } from 'preact'
import { html } from 'htm/preact'

interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
    displayName: string;
    name: string;
    class?: string;
}

export const TextInput:FunctionComponent<InputProps> = function (props:InputProps) {
    const { name } = props
    const { displayName, ..._props } = props

    return (html`<div class="${'input-group ' + name}">
        <input ...${_props} name=${name} type=${props.type || 'text'}
            placeholder=" "
            required=${props.required}
            minLength=${props.minLength}
            maxLength=${props.maxLength}
            id=${name}
        />
        <label htmlFor=${name}>${displayName}</label>
    </div>`)
}
