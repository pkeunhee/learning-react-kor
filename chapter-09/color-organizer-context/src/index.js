import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

// 리액트에서 제공하는 context 기능을 사용하여 store 를 유지하는 방법 

render(
    <App store={store} />,
    document.getElementById('react-container')
)