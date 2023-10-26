import { FunctionComponent, JSX } from 'preact'
import { useState } from 'preact/hooks'
import { html } from 'htm/preact'
import { Button } from './button.js'

interface Props extends JSX.HTMLAttributes<HTMLFormElement> {
    controls?:boolean;
    buttonText?:string;
}

/**
 * A form that uses HTML attributes for validation, and disables the submit
 * button as appropriate.
 * @param {{
 *  controls?:boolean;
 *  buttonText?:string;
 * } extends JSX.HTMLAttributes<HTMLFormElement>} props
 * @returns {JSX.Element}
 */
export const ReactiveForm:FunctionComponent<Props> = function (props:Props) {
    const [isValid, setValid] = useState<boolean>(false)
    const [isResolving, setResolving] = useState<boolean>(false)
    let { buttonText, controls } = props
    if (controls === undefined) controls = true

    const classes = (['reactive-form', props.class]).join(' ').trim()

    // need this because `onInput` event doesnt work for cmd + delete event
    function onFormKeydown (ev:KeyboardEvent) {
        const key = ev.key
        const { form } = ev.target as HTMLInputElement
        if (!form) return
        if (key !== 'Backspace' && key !== 'Delete') return

        const _isValid = (form.checkValidity())
        if (_isValid !== isValid) setValid(_isValid)
    }

    function handleInput (ev) {
        const form = ev.target
        const isOk = (form as HTMLFormElement).checkValidity()
        if (isOk !== isValid) setValid(isOk)
        props.onInput && props.onInput(ev)
    }

    async function handleSubmit (ev) {
        ev.preventDefault()
        setResolving(true)
        props.onSubmit && await props.onSubmit(ev)
        setResolving(false)
    }

    return (html`<form
        onInput=${handleInput}
        onKeyDown=${onFormKeydown}
        onSubmit=${handleSubmit}
        class="${classes}"
    >
        ${props.children}

        ${controls ?
            html`<${Button}
                isSpinning=${isResolving}
                type="submit"
                disabled=${!isValid}
            >${buttonText || 'Save'}</$Button>` :
            null
        }
    </form>`)
}
