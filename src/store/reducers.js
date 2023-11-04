const initialState = {
    inputValue: '',
    widthValue: '',
    heightValue: '',
    displayValue: 'select',
    positionValue: 'select',
    colorValue: '#000',
    paddingtopValue: '',
    paddingbottomValue: '',
    paddingleftValue: '',
    paddingrightValue: '',
    margintopValue: '',
    marginbottomValue: '',
    marginleftValue: '',
    marginrightValue: '',
    eleValue: '',
    parentEleId: '',
    deleteEleId: '',
    eleText: '',
    list: [],
    allEleList: [],
    eleList: [],
    eleStyle: {}
}

export default (state = initialState, action) => {
    if (action.type === 'changeInput') {
        state[action.inputName] = action.value
        return state
    }
    else if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        if (action.payload.eleValue == 'div') {
            newState.eleList.push({
                id: action.payload.id,
                ele: action.payload.eleValue
            })
        }

        //添加所有组件
        newState.allEleList.push({
            id: action.payload.id,
            ele: action.payload.eleValue
        })

        if (action.payload.parentEleId) {
            invokeList(action.payload.parentEleId, newState.list, (item) => {
                item.list.push({ ...action.payload })
            })
        } else newState.list.push({ ...action.payload })

        return newState
    } else if (action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state))
        invokeDeleteList(action.payload.deleteEleId, newState, (list) => {
            var idList = []
            var currentInfo = list.find((item) => item.id === action.payload.deleteEleId)

            getAllId(currentInfo.list, idList)

            if (idList.length > 0) {
                newState.eleList = newState.eleList.filter((item) => !idList.includes(item.id))
                newState.allEleList = newState.allEleList.filter((item) => !idList.includes(item.id))
            }
            return list.filter((item) => item.id !== action.payload.deleteEleId)
        })

        newState.deleteEleId = ''
        newState.parentEleId = ''
        newState.eleList = newState.eleList.filter((item) => item.id !== action.payload.deleteEleId)
        newState.allEleList = newState.allEleList.filter((item) => item.id !== action.payload.deleteEleId)

        return newState
    } else if (action.type === 'handleSelectElement') {
        let newState = JSON.parse(JSON.stringify(state))

        deleteAllStyle(newState)

        if (action.payload.id) {
            addCurElementStyle(action.payload.id, newState)
        }
        return newState
    }
    //关键代码------------------end----------
    return state
}

function invokeList(id, list, callback) {
    if (list && list.length > 0)
        list.forEach((item) => {
            if (id === item.id) {
                callback(item)
                return
            }
            invokeList(id, item.list, callback)
        })
}

function invokeDeleteList(id, state, callback) {
    if (state.list && state.list.length > 0) {
        state.list.forEach((item) => {
            if (id === item.id) {
                state.list = callback(state.list)
                return
            }
            invokeDeleteList(id, item, callback)
        })
    }
}

//删除所有样式
function deleteAllStyle(state) {
    if (state.list && state.list.length > 0) {
        state.list.forEach((item) => {
            item.eleStyle = {}
            deleteAllStyle(item)
        })
    }
}

function addCurElementStyle(id, state) {
    if (state.list && state.list.length > 0) {
        state.list.forEach((item) => {
            if (id === item.id) {
                item.eleStyle = {
                    transform: 'scale(1.05)',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                }
                return
            }
            addCurElementStyle(id, item)
        })
    }
}

function getAllId(list, idList) {
    if (list && list.length > 0)
        list.forEach((item) => {
            idList.push(item.id)
            getAllId(item.list, idList)
        })
}
