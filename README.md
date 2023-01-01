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
import { render } from 'preact'
import { html } from 'htm/preact'
import HamburgerWrapper from '@nichoth/components/hamburger.mjs'
import MobileNav from '@nichoth/components/mobile-nav-menu.mjs'
import { useSignal } from '@preact/signals'
import '@nichoth/components/hamburger.css'
import '@nichoth/components/mobile-nav-menu.css'
import '@nichoth/components/z-index.css'

const navList = [
    { body: 'test', href: '/test' },
    { body: 'fooo', href: '/fooo' }
]

const App = function App () {
    const isOpen = useSignal(false)

    function mobileNavHandler (ev) {
        ev.preventDefault()
        isOpen.value = !isOpen.value
    }

    return html`<div class="app">
        <${HamburgerWrapper} isOpen=${isOpen} onClick=${mobileNavHandler} />
        <${MobileNav} isOpen=${isOpen} navList=${navList} />
    </div>`
}

const el = document.getElementById('root')
if (el) render(html`<${App} />`, el)
```
