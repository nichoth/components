import { html } from 'htm/preact'
import { FunctionComponent } from 'preact'
import { Signal, useSignal } from '@preact/signals'

/**
 * Create a button element
 * @param {{ isSpinning:Signal<boolean> }} props Can pass an optional `isSpinning`
 * prop. If you pass an `onClick` handler also, then it should return a promise,
 * and this will spin until the promise resolves.
 * @returns {JSX.Element}
 */
export const ButtonOutline:FunctionComponent<{
    isSpinning?: Signal<boolean>;
    type?: 'submit' | 'reset' | 'button';
    class?: string;
    onClick?: (ev:MouseEvent) => Promise<any>;
}> = function (props) {
    const { ..._props } = props
    let { isSpinning } = props

    if (!isSpinning) isSpinning = useSignal(false)

    const classes = ([
        'btn-outline',
        props.class,
        isSpinning.value ? 'spinning' : ''
    ]).filter(Boolean).join(' ').trim()

    async function click (ev:MouseEvent) {
        if (!isSpinning) throw new Error('not isSpinning')  // for TS
        if (props.onClick) {
            isSpinning.value = true
            await props.onClick(ev)
            isSpinning.value = false
        }
    }

    return (html`<button
        ...${_props}
        class=${classes}
        onClick=${click}
    >
        <span class="btn-content">${props.children}</span>
    </button>`)
}

export const Primary:FunctionComponent<{
    isSpinning?: Signal<boolean>;
    type?: 'submit' | 'reset' | 'button';
    class?: string;
    onClick?: (ev:MouseEvent) => Promise<any>;
}> = function (props) {
    let { isSpinning } = props
    if (!isSpinning) isSpinning = useSignal(false)

    const classes = ([
        'btn-outline',
        'primary',
        props.class,
        isSpinning.value ? 'spinning' : ''
    ]).filter(Boolean).join(' ').trim()

    async function click (ev:MouseEvent) {
        if (!isSpinning) throw new Error('not isSpinning')  // for TS
        if (props.onClick) {
            isSpinning.value = true
            await props.onClick(ev)
            isSpinning.value = false
        }
    }

    return (html`<button
        ...${props}
        class=${classes}
        onClick=${click}
    >
        <span class="btn-content">${props.children}</span>
    </button>`)
}
