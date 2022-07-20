import React, {useState, useEffect} from 'react'

const SingleColor = ({rgba, weight, index, hexColor}) => {
  return <article className={`color ${index > 10 && color-light}`} style={
    {backgroundColor : `${hexColor}`}
  }></article>
}

export default SingleColor;