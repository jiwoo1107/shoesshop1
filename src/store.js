import { configureStore, createSlice } from '@reduxjs/toolkit'

const user= createSlice({
    name: 'user',
    initialState: {id : 'abc', age: 22},
    reducers: {
        changeId(state){
            state.id = 'abc1234'
        },
    
        addAge(state){
        ++state.age;
        },
        
    }
})


export const {changeId, addAge} = user.actions

const cart = createSlice({
    name: 'cart',
    initialState: [
       
    ],
    reducers:{
        addCount(state, action){
            let idx = state.findIndex(a => a.id === action.payload)
            ++state[idx].amount;
        },
        sortItem(state){
            state.sort((a,b)=>
                a.item > b.item ? 1: -1
            )
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})

export const {addCount, sortItem, addItem} = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})

