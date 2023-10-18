import { FunctionComponent, JSX } from 'preact'

interface InputProps extends JSX.HTMLAttributes<HTMLInputElement> {
    displayName: string;
    className?: string;
}

export const TextInput:FunctionComponent<InputProps> = function (props:InputProps) {
    const { name } = props
    const { displayName, ..._props } = props

    return (<div className={'input-group ' + {name}}>
        <input {..._props} name={name} type={props.type || 'text'}
            placeholder=" " required={props.required}
            minLength={props.minLength}
            maxLength={props.maxLength}
            id={name}
        />
        <label htmlFor={name}>{displayName}</label>
    </div>)
}
