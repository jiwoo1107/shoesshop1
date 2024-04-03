import React, { useContext, useEffect, useState } from 'react'
import { Context1 } from '../App';

const TabContent = (props) => {
    const {tab} = props;
    const [fade, setFade] = useState('')
    const {remain} = useContext(Context1)

    useEffect(()=>{
        setTimeout(()=>{ setFade('end')}, 50)
        return ()=>{
            setFade('')
        }
    },[tab])

  return (
    <div className={'start' + fade}>
          {[<div>내용0 남은수량: {remain[1] }</div>,<div>내용1</div>,<div>내용2</div>][tab]}
        
    </div>
  )
}

export default TabContent