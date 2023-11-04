// src/store/actions.js
export const setComponentStyle = (componentId, style) => ({
    type: 'SET_COMPONENT_STYLE',
    componentId,
    style
})

export const addComponent = (parentId, componentType) => ({
    type: 'ADD_COMPONENT',
    parentId,
    componentType
})

export const removeComponent = (parentId, componentType) => ({
    type: 'REMOVE_COMPONENT',
    parentId,
    componentType
})

export const updateComponent = (id, properties) => {
    return {
        type: 'UPDATE_COMPONENT',
        payload: { id, properties }
    }
}
