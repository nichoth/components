import { FunctionComponent, JSX } from 'preact'
import { html } from 'htm/preact'

interface Props extends JSX.HTMLAttributes<HTMLInputElement> {
    displayName:string
}

export const TextInput:FunctionComponent<Props> = function TextInput (props:Props) {
    const { name, displayName } = props
    const _props:Partial<Props> = {...props}
    delete _props.displayName

    return html`<div className="form-stuff">
        <div className="input-group ${name}">
            <input ...${_props} name="${name}" type=${props.type || 'text'}
                placeholder=" " required=${props.required}
                minLength=${props.minLength || props.minLength}
                maxLength=${props.maxLength || props.maxLength}
                id="${name}"
            />
            <label htmlFor=${name}>${displayName}</label>
        </div>
    </div>`
}
