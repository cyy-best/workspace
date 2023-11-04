import React from 'react'
import ButtonComponent2 from './ButtonComponent2'
const getListComponentList1 = (list) => {
    return list.map((item) => {
        if (item.eleValue === 'div') {
            return <CustomDiv2 {...item}></CustomDiv2>
        } else if (item.eleValue === 'button') {
            return <ButtonComponent2 {...item}></ButtonComponent2>
        }
        return <></>
    })
}
const CustomDiv2 = ({ widthValue, heightValue, displayValue, position, colorValue, paddingtopValue, paddingbottomValue, paddingleftValue, paddingrightValue, margintopValue, marginbottomValue, marginleftValue, marginrightValue, list, eleStyle }) => {

    const divStyle = {
        width: widthValue + 'px',
        height: heightValue + 'px',
        display: displayValue,
        position: position,
        backgroundColor: colorValue,
        paddingLeft: paddingleftValue + 'px',
        paddingRight: paddingrightValue + 'px',
        paddingTop: paddingtopValue + 'px',
        paddingBottom: paddingbottomValue + 'px',
        marginLeft: marginleftValue + 'px',
        marginRight: marginrightValue + 'px',
        marginTop: margintopValue + 'px',
        marginBottom: marginbottomValue + 'px',
        ...eleStyle
    }

    return <div style={divStyle}>{list && list.length > 0 ? getListComponentList1(list) : <></>}</div>
}

export default CustomDiv2
