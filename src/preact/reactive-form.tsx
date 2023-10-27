import { Attributes, ComponentChildren, FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import { Button } from './button.jsx'

type Props = {
    onInput?:(event:InputEvent)=>any;
    onSubmit:(event:SubmitEvent)=>any;
    controls?:boolean;
    buttonText?:string;
} & Readonly<Attributes & {
    children?: ComponentChildren
}>

/**
 * A form that uses HTML attributes for validation, and disables the submit
 * button as appropriate.
 * @param {{
 *  onInput?:(event:InputEvent)=>any;
 *  onSubmit:(event:SubmitEvent)=>any;
 *  controls?:boolean;
 *  buttonText?:string;
 * }} props
 * @returns {JSX.Element}
 */
export const ReactiveForm:FunctionComponent<Props> = function (props:Props) {
    const [isValid, setValid] = useState<boolean>(false)
    const [isResolving, setResolving] = useState<boolean>(false)
    let { buttonText, controls } = props
    if (controls === undefined) controls = true

    // need this because `onInput` event doesnt work for cmd + delete event
    function onFormKeydown (ev:KeyboardEvent) {
        const key = ev.key
        const { form } = ev.target as HTMLInputElement
        if (!form) return
        if (key !== 'Backspace' && key !== 'Delete') return

        const _isValid = (form.checkValidity())
        if (_isValid !== isValid) setValid(_isValid)
    }

    function handleInput (ev:InputEvent) {
        const form = ev.target
        const isOk = (form as HTMLFormElement).checkValidity()
        if (isOk !== isValid) setValid(isOk)
        props.onInput && props.onInput(ev)
    }

    async function handleSubmit (ev:SubmitEvent) {
        ev.preventDefault()
        setResolving(true)
        props.onSubmit && await props.onSubmit(ev)
        setResolving(false)
    }

    return (<form
        onInput={handleInput}
        onKeyDown={onFormKeydown}
        onSubmit={handleSubmit}
        className="reactive-form"
    >
        {props.children}

        {controls ?
            <Button
                isSpinning={isResolving}
                type="submit"
                disabled={!isValid}
            >{buttonText || 'Save'}</Button> :
            null
        }
    </form>)
}
