const initialState={
    counter:0
    loading: false,
    error: null
}
const reducer= (initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return(...state,counter: state.counter+action.payload)
        case DECREMENT:
            
        default:
        return state
    }
}
const store= createStore({
    name: "userDetails"
})
store(reducer)

const INCREMENT= "INCREMENT";
export const increment=(i)=>({

        type: INCREMENT,
        payload:i

})
dispatch(increment(counter))