import React, { Component } from 'react'
import store from '../store/index'
import { Input, Button, Select, message } from 'antd'
import CustomDiv from './customDiv'
import CustomDiv2 from './customDiv2'
import ButtonComponent2 from './ButtonComponent2'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            eleValue: 'select',
            parentEleId: '',
            deleteEleId: '',
            eleText: '',
            list: [],
            allEleList: [],
            eleList: []
        }
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this) //转变this指向
        this.clickBtn = this.clickBtn.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    getListComponentList = () => {
        return this.getListComponentList1(this.state.list)
    }

    getListComponentList1 = (list) => {
        return list.map((item) => {
            if (item.eleValue === 'div') {
                return <CustomDiv2 {...item}></CustomDiv2>
            } else if (item.eleValue === 'button') {
                return <ButtonComponent2 {...item}></ButtonComponent2>
            }
            return <></>
        })
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div className='settings' style={{ flex: 1, width: '30%' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '10px' }}>width:</span>
                            <Input placeholder={this.state.widthValue} onChange={(e) => this.changeInputValue(e, 'widthValue')} />
                            px
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '10px' }}>height:</span>
                            <Input placeholder={this.state.heightValue} onChange={(e) => this.changeInputValue(e, 'heightValue')} />
                            px
                        </div>
                        <div>
                            display:
                            <Select defaultValue='select' onChange={(value) => this.changeInputValue({ target: { value } }, 'displayValue')}>
                                <Select.Option value='static'>static</Select.Option>
                                <Select.Option value='relative'>relative</Select.Option>
                                <Select.Option value='absolute'>absolute</Select.Option>
                                <Select.Option value='fixed'>fixed</Select.Option>
                            </Select>
                        </div>
                        <div>
                            position:
                            <Select defaultValue='select' onChange={(value) => this.changeInputValue({ target: { value } }, 'positionValue')}>
                                <Select.Option value='block'>block</Select.Option>
                                <Select.Option value='inline-block'>inline-block</Select.Option>
                                <Select.Option value='inline'>inline</Select.Option>
                                <Select.Option value='flex'>flex</Select.Option>
                            </Select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '10px' }}>color:</span>
                            <Input type='color' onChange={(e) => this.changeInputValue(e, 'colorValue')} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
                            Padding
                            <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'row' }}>
                                <span>top:</span>
                                <Input placeholder={this.state.paddingtopValue} onChange={(e) => this.changeInputValue(e, 'paddingtopValue')} />
                                px
                            </div>
                            <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'row' }}>
                                <span>bottom:</span>
                                <Input placeholder={this.state.paddingbottomValue} onChange={(e) => this.changeInputValue(e, 'paddingbottomValue')} />
                                px
                            </div>
                            <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'row' }}>
                                <span>left:</span>
                                <Input placeholder={this.state.paddingleftValue} onChange={(e) => this.changeInputValue(e, 'paddingleftValue')} />
                                px
                            </div>
                            <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'row' }}>
                                <span>right:</span>
                                <Input placeholder={this.state.paddingrightValue} onChange={(e) => this.changeInputValue(e, 'paddingrightValue')} />
                                px
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'left', flexDirection: 'column' }}>
                            Margin
                            <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'row' }}>
                                <span>top:</span>
                                <Input placeholder={this.state.margintopValue} onChange={(e) => this.changeInputValue(e, 'margintopValue')} />
                                px
                            </div>
                            <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'row' }}>
                                <span>bottom:</span>
                                <Input placeholder={this.state.marginbottomValue} onChange={(e) => this.changeInputValue(e, 'marginbottomValue')} />
                                px
                            </div>
                            <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'row' }}>
                                <span>left:</span>
                                <Input placeholder={this.state.marginleftValue} onChange={(e) => this.changeInputValue(e, 'marginleftValue')} />
                                px
                            </div>
                            <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'row' }}>
                                <span>right:</span>
                                <Input placeholder={this.state.marginrightValue} onChange={(e) => this.changeInputValue(e, 'marginrightValue')} />
                                px
                            </div>
                        </div>
                        <div>
                            <span>select component:</span>
                            <Select defaultValue='div' style={{ width: '150px' }} value={this.state.eleValue} onChange={(value) => this.changeInputValue({ target: { value } }, 'eleValue')}>
                                <Select.Option value='div'>div</Select.Option>
                                <Select.Option value='button'>button</Select.Option>
                            </Select>
                        </div>
                        <div>
                            <span>select parent:</span>
                            <Select style={{ width: '150px' }} defaultValue='' allowClear value={this.state.parentEleId} onChange={(value) => this.handleSelectElement({ target: { value } }, 'parentEleId')}>
                                {this.state.eleList.map((item) => {
                                    return <Select.Option value={item.id}>{item.id}</Select.Option>
                                })}
                            </Select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '10px' }}>text:</span>
                            <Input placeholder={this.state.eleText} onChange={(e) => this.changeInputValue(e, 'eleText')} />
                        </div>
                        <Button type='primary' onClick={this.clickBtn}>
                            ADD
                        </Button>
                        <div>
                            <span>select a delete component:</span>
                            <Select style={{ width: '150px' }} defaultValue='' allowClear value={this.state.deleteEleId} onChange={(value) => this.handleSelectElement({ target: { value } }, 'deleteEleId')}>
                                {this.state.allEleList.map((item) => {
                                    return <Select.Option value={item.id}>{item.id}</Select.Option>
                                })}
                            </Select>
                        </div>
                        <Button type='primary' onClick={this.deleteHandle}>
                            DELETE
                        </Button>
                    </div>
                </div>
                <div className='workspace' style={{ flex: 3, border: '1px solid black' }}>
                    {this.getListComponentList()}
                </div>
            </div>
        )
    }

    deleteHandle = () => {
        if (!this.state.deleteEleId) {
            message.error('please select a delete component')
            return
        }
        store.dispatch({
            type: 'deleteItem',
            payload: {
                deleteEleId: this.state.deleteEleId
            }
        })
    }
    handleSelectElement = (e, inputName) => {
        const action = {
            type: 'handleSelectElement',
            payload: {
                id: e.target.value,
                inputName
            }
        }
        store.dispatch(action)
        this.changeInputValue(e, inputName)
    }
    changeInputValue(e, inputName) {
        const action = {
            type: 'changeInput',
            value: e.target.value,
            inputName
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState(), () => {
            console.log(this.state)
        })
    }
    clickBtn() {
        if (!this.state.eleValue) {
            message.error('please select a component')
            return
        }
        const uniqueId = Date.now().toString(36)
        const action = {
            type: 'addItem',
            payload: {
                id: uniqueId,
                widthValue: this.state.widthValue,
                heightValue: this.state.heightValue,
                displayValue: this.state.displayValue,
                positionValue: this.state.positionValue,
                colorValue: this.state.colorValue,
                paddingtopValue: this.state.paddingtopValue,
                paddingbottomValue: this.state.paddingbottomValue,
                paddingleftValue: this.state.paddingleftValue,
                paddingrightValue: this.state.paddingrightValue,
                margintopValue: this.state.margintopValue,
                marginbottomValue: this.state.marginbottomValue,
                marginleftValue: this.state.marginleftValue,
                marginrightValue: this.state.marginrightValue,
                list: [],
                eleText: this.state.eleText,
                parentEleId: this.state.parentEleId,
                eleValue: this.state.eleValue,
                eleStyle: {}
            }
        }
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = {
            type: 'deleteItem',
            index
        }
        store.dispatch(action)
    }
}
export default TodoList
