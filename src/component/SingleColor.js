import React, {useState, useEffect} from 'react'

const SingleColor = ({rgb, weight, index, hexColor}) => {
    let hexValue = '#' + hexColor;
    let rgbValue = 'rgb(' + rgb.join(',') + ')';

    return <article className={`${index > 10 ? 'color color-light' : 'color'}` } style={
    {backgroundColor : `${hexColor}`}
  }>

    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hexValue}</p>
    <p className='color-value'>{rgbValue}</p>
  </article>
}

export default SingleColor;