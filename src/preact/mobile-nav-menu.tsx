import { FunctionComponent } from 'preact'
import { Signal } from '@preact/signals'

interface Props {
    isOpen:Signal<boolean>
}

export const MobileNav:FunctionComponent<Props> = function (props) {
    const { isOpen, children } = props

    function navClick () {
        isOpen.value = false
    }

    return (<div className={'mobile-nav-list' + isOpen.value ? ' open' : ' closed'}>
        <ul>
            ${Array.isArray(children) && children.map((el, i) => {
                return (<li key={i} onClick={navClick}>
                    {el}
                </li>)
            })}
        </ul>
    </div>)
}

export default MobileNav
