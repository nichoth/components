import { FunctionComponent, JSX } from 'preact'

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
    isSpinning:boolean;
    onClick?:EventListener
}

const Button:FunctionComponent<Props> = function Button (props:Props) {
    const { isSpinning, ..._props } = props
    return (<span class={('form-stuff ' + props.class || '').trim()}>
        {isSpinning ?
            (<button
                {..._props}
                className={((props.className || '') + ' spinning').trim()}
                onClick={props.onClick}
                disabled={true}
            >
                <span class="btn-content">{props.children}</span>
            </button>) :
            (<button {..._props}>
                <span class="btn-content">{props.children}</span>
            </button>)
        }
    </span>)
}

export { Button }
export default Button
