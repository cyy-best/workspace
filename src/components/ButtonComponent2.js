// Button.js
import React from 'react'

const ButtonComponent2 = ({ widthValue, heightValue, displayValue, position, colorValue, paddingtopValue, paddingbottomValue, paddingleftValue, paddingrightValue, margintopValue, marginbottomValue, marginleftValue, marginrightValue, list, eleText, eleStyle }) => {

    const style = {
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
    return <button style={style}>{eleText}</button>
}

export default ButtonComponent2
