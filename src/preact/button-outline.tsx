import { FunctionComponent, JSX } from 'preact'
import { Signal, useSignal } from '@preact/signals'

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
    isSpinning?: Signal<boolean>,
    className?: string,
    onClick?: (ev:MouseEvent) => Promise<any>
}

/**
 * Create a button element
 * @param {{ isSpinning:Signal<boolean> }} props Can pass an optional `isSpinning`
 * prop. If you pass an `onClick` handler also, then it should return a promise,
 * and this will spin until the promise resolves.
 * @returns {JSX.Element}
 */
export const ButtonOutline:FunctionComponent<ButtonProps> = function (props) {
    const { className, ..._props } = props
    let { isSpinning } = props

    if (!isSpinning) isSpinning = useSignal(false)

    const classes = ([
        'btn-outline',
        className,
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

    return (<button
        {..._props}
        className={classes}
        onClick={click}
    >
        <span className="btn-content">{props.children}</span>
    </button>)
}

export const Primary:FunctionComponent<ButtonProps> = function (props) {
    const { className, ..._props } = props
    let { isSpinning } = props
    if (!isSpinning) isSpinning = useSignal(false)

    const classes = ([
        'btn-outline',
        'primary',
        className,
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

    return (<button
        {..._props}
        className={classes}
        onClick={click}
    >
        <span className="btn-content">{props.children}</span>
    </button>)
}
