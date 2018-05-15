import '../../stylesheets/AddColorForm.scss'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { addColor } from '../actions'

// 상태가 없는 함수형 컴포넌트
// 함수 파라미터에서 store 를 얻어 올수 있다. (두번째 파라미터)
const AddColorForm = (props, { store }) => {

    let _title, _color

    const submit = e => {
        e.preventDefault()
        store.dispatch(addColor(_title.value, _color.value))
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="색 이름" required/>
            <input ref={input => _color = input}
                   type="color" required/>
            <button>추가</button>
        </form>
    )

}

// 이걸 지정해야 context 변수를 파라미터로 받아 올 수 있다. (필수)
AddColorForm.contextTypes = {
    store: PropTypes.object
}

export default AddColorForm
