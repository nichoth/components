import { FunctionComponent } from 'preact'
import { useSignal } from '@preact/signals'
import clipboardCopy from 'clipboard-copy'

interface Props {
    className?: string,
    payload: string,
    onClick?: (ev:MouseEvent) => void
    title?: string
}

export const CopyBtn:FunctionComponent<Props> = function CopyBtn (props) {
    const hasCopied = useSignal<boolean>(false)
    const { payload, ..._props } = props

    function onClick (ev:MouseEvent) {
        ev.preventDefault()
        clipboardCopy(payload)
        hasCopied.value = true
        if (props.onClick) props.onClick(ev)
    }

    return (<button {..._props}
        class={('copy-btn ' + (props.className || '')).trim()}
        onClick={onClick}
    >
        {hasCopied.value ? ('✅ \u00A0 copied!') : props.children}
    </button>)
}

export const CopyIconBtn:FunctionComponent<Props> = function CopyIconBtn (props) {
    const hasCopied = useSignal<boolean>(false)

    function onClick (ev:MouseEvent) {
        ev.preventDefault()
        clipboardCopy(props.payload)
        hasCopied.value = true
        if (props.onClick) props.onClick(ev)
    }

    return (<button {...props} onClick={onClick}
        class={('copy-icon-btn ' +
            (hasCopied.value ? 'has-copied' : '') +
            (props.className || '')).trim()
        }
    >
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 115.77 122.88" style="enable-background:new 0 0 115.77 122.88" xmlSpace="preserve"><g><path class="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z" /></g></svg>
    </button>)
}
