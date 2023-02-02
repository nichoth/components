# components
A collection of UI components made with [preact](https://www.npmjs.com/package/preact).


## install
```
npm i -S @nichoth/components
```


## use
I recommend using this with [vite](https://www.npmjs.com/package/vite) + ESM, because it is easy. These are all [preact](https://www.npmjs.com/package/preact) components; you will need to install `preact`.


### ESM
```js
import Hamburger from '@nichoth/components/hamburger.mjs'
import '@nichoth/hamburger.css'
```

### CJS
```js
const Hamburger = require('@nichoth/components/hamburger.cjs').default
```

## example
```js
// @ts-check
import { render } from 'preact'
import { html } from 'htm/preact'
import { useSignal } from '@preact/signals'
import HamburgerWrapper from '@nichoth/components/hamburger.mjs'
import MobileNav from '@nichoth/components/mobile-nav-menu.mjs'
// some typescript is in `ts` folder
// import these if you are in a typescript project
import { CopyBtn, CopyIconBtn } from '@nichoth/components/ts/copy-btn.ts'
import '@nichoth/components/copy-btn.css'
import '@nichoth/components/hamburger.css'
import '@nichoth/components/mobile-nav-menu.css'
import '@nichoth/components/z-index.css'

// use CJS like this, with `.cjs` extension
// const { CopyBtn } = require('@nichoth/components/copy-btn.cjs)

const App = function App () {
    const isOpen = useSignal(false)

    function mobileNavHandler (ev) {
        ev.preventDefault()
        isOpen.value = !isOpen.value
    }

    return html`<div class="app">
        <${HamburgerWrapper} isOpen=${isOpen} onClick=${mobileNavHandler} />
        <${MobileNav} isOpen=${isOpen}>
            <a href="/baloney">baloney</a>
            <a href="/test">testing</a>
        <//>

        <${CopyBtn} payload=${'hurray'}>copy something<//>

        <p>Copy this <${CopyIconBtn} payload=${'Copy this'}><//></p>
    </div>`
}

const el = document.getElementById('root')
if (el) render(html`<${App} />`, el)

```
