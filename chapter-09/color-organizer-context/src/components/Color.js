import '../../stylesheets/Color.scss'
import { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import FaTrash from 'react-icons/lib/fa/trash-o'
import { rateColor, removeColor } from '../actions'

// 컴포넌트 클래스에서는 this.context 로 가져올수 있다.
class Color extends Component {

    render() {
        const { id, title, color, rating, timestamp } = this.props
        const { store } = this.context
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={() =>
                    store.dispatch(removeColor(id))
                }>
                    <FaTrash />
                </button>
                <div className="color"
                     style={{ backgroundColor: color }}>
                </div>
                <TimeAgo timestamp={timestamp} />
                <div>
                    <StarRating starsSelected={rating}
                                onRate={rating =>
                                    store.dispatch(rateColor(id, rating))
                                } />
                </div>
            </section>
        )
    }

}

// context 를 사용하려면 필수로 기술해야 함
Color.contextTypes = {
    store: PropTypes.object
}

Color.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number
}

Color.defaultProps = {
    rating: 0
}

export default Color
