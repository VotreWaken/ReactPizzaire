

import React from 'react'

const Helmet = (props) => {

    document.title = 'Pizzaire App' + props.title
  return (
    <div className=''>{props.children}</div>
  )
}

export default Helmet