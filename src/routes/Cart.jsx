import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAge, addCount, changeId, sortItem, addItem } from '../store'


const Cart = () => {
    const user = useSelector(state => state.user )
    const cart = useSelector(state => state.cart)
   
    
    const dispatch = useDispatch();

  return (
    <div>
        <h4>아이디 : {user.id} 나이 : {user.age}</h4>

        <button onClick={()=> {
            dispatch(changeId())
        }}>아이디변경</button>
        <button onClick={()=> {
            dispatch(addAge())
        }}>나이+</button>

        <table style={{margin:'50px auto', width: '80%'}}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>이미지</th>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((value,i)=>
                     <tr ket={i}>
                        <td>{value.id}</td>
                        <td><img src={process.env.PUBLIC_URL + value.imgUrl}
                        alt='item' width='100px' /></td>
                        <td>{value.item}</td>
                        <td>{value.price}</td>
                        <td>{value.amount}</td>
                        <td><button onClick={()=>{
                            dispatch(addCount(value.id))
                        }}>+</button></td>
                     </tr>
                    )
                }

            </tbody>
        </table>
        <button onClick={()=>{
            dispatch(sortItem())
        }}>이름순 정렬</button>
       
    </div>

  )
}

export default Cart