import { FunctionComponent, JSX } from 'preact'

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
    isSpinning:boolean;
    onClick?:EventListener
}

const Button:FunctionComponent<Props> = function Button (props:Props) {
    const { isSpinning, ..._props } = props
    return (isSpinning ?
        (<button
            {..._props}
            className={((props.className || '') + ' btn spinning').trim()}
            onClick={props.onClick}
            disabled={true}
        >
            <span class="btn-content">{props.children}</span>
        </button>) :

        (<button
            {..._props}
            className={((props.className || '') + ' btn').trim()}
        >
            <span class="btn-content">{props.children}</span>
        </button>))
}

export { Button }
export default Button
