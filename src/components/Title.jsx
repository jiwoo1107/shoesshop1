import React from 'react'

const Title =(props)=> {
    const {title } = props;


    const css1 = {
        marginTop : '70px',
        textAlign : 'center'
    }
  return (
    <>
     <h3 style={css1}>{title[0].tit_h3}</h3>
     <p style={{textAlign: 'center'}}> {title[0].tit_p}</p>
    </>
  )
}

export default Title
