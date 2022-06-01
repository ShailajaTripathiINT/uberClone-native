let defaultState = {
  selectedItems: {item: [],
     restaurantName: ''},
};

let cartReducer =(state= defaultState,action)=>{
    console.log("====>")
    switch(action.type){
        case "ADD_TO_CART":
            let newState ={...state};
            // console.log('======)))',newState,action.payload,newState.selectedItems[items])
            newState.selectedItems ={
                item:[...newState.selectedItems.item,action.payload],
                restaurantName:action.payload.restaurantName,
            };
            console.log(newState,"👉",action.payload);
            return newState;
        

        // case "ADD_TO_CART":
        //     console.log(state);
        //     return{
        //         ...state,
        //         selectedItems : {
        //             item: [...state.selectedItems.item, action.payload],
        //             restaurantName: action.payload.title
        //         }
        //     }
        
        default:
            return state;
    }
}

export default cartReducer;