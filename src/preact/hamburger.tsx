import { ComponentChildren, FunctionComponent } from 'preact'
import { Signal } from '@preact/signals'

interface Props {
    children?:ComponentChildren;
    onClick:()=>any;
    isOpen:Signal<boolean>;
}

export const HamburgerWrapper:FunctionComponent<Props> = function (props) {
    const { children, onClick, isOpen } = props

    return (<div className={'hamburger-wrapper' + (isOpen.value ? ' open' : '')}>
        {children}
        <Hamburger isOpen={isOpen} onClick={onClick} />
    </div>)
}

export default HamburgerWrapper

export function Hamburger ({ onClick, isOpen }) {
    return (<div className={'hamburger' + (isOpen.value ? ' open' : '')}>
        <input type="checkbox" id="checkbox" checked={isOpen} />
        <label class="burger" for="checkbox" onClick={onClick}>
            <button onClick={onClick}>
                <div class="container top">
                    <div className="line top" />
                </div>
                <div class="container bottom">
                    <div className="line bottom" />
                </div>
            </button>
        </label>
    </div>)
}
