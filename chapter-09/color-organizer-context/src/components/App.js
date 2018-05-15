import '../../stylesheets/APP.scss'
import { Component } from 'react'
import PropTypes from 'prop-types'
import SortMenu from './SortMenu'
import ColorList from './ColorList'
import AddColorForm from './AddColorForm'
import { sortFunction } from '../lib/array-helpers'

class App extends Component {

    // life cycle 함수 중 하나. context 를 정의하는 객체를 반환
	getChildContext() {
        return {
            store: this.props.store // store 를 context 에 추가 한다
        }
    }

    componentWillMount() {
        this.unsubscribe = store.subscribe(
            () => this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const { colors, sort } = store.getState()
        const sortedColors = [...colors].sort(sortFunction(sort))
        return (
            <div className="app">
                <SortMenu />
                <AddColorForm />
                <ColorList colors={sortedColors} />
            </div>
        )
    }

}

App.propTypes = {
    store: PropTypes.object.isRequired
}

// react context 사용을 위해 꼭 정의해야 함
App.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default App
