import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

// 리액트의 context 기능을 Provider 태그로 간단히 사용하는 방법

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
)