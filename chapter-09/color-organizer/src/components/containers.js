import { connect } from 'react-redux'
import AddColorForm from './ui/AddColorForm'
import SortMenu from './ui/SortMenu'
import ColorList from './ui/ColorList'
import { addColor, sortColors, rateColor, removeColor } from '../actions'
import { sortFunction } from '../lib/array-helpers'

// 컨테이너 컴포넌트 생성하기
// connect 함수 파라미터 : 1) 상태 변수를 프로퍼티로 연결하는 함수, 2) 이벤트가 발생하면 액션을 dispatch 해주는 함수
// connect 로 state 와 dispatch 를 세팅해 주면 대상 컴포넌트의 파라미터에 해당 이름으로 전달되어 값들을 참조하거나 함수를 실행할 수 있다.


// state 는 null 로 지정한 예
export const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title,color))
            }
        })
)(AddColorForm)

export const Menu = connect(
    state =>
        ({
            sort: state.sort
        }),
    dispatch =>
        ({
            onSelect(sortBy) {
                dispatch(sortColors(sortBy))
            }
        })
)(SortMenu)

// ColorList 컴포넌트를 store 에 연결해 준다
// connect 고차 함수는 표현 컴포넌트를 받아 컨테이너로 래핑한다.
export const Colors = connect(
    state =>
        ({
            colors: [...state.colors].sort(sortFunction(state.sort))
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeColor(id))
            },
            onRate(id, rating) {
                dispatch(rateColor(id, rating))
            }
        })
)(ColorList)