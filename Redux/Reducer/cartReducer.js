let defaultState = {
  selectedItems: {items: [], restaurantName: ''},
};

let cartReducer = (state = defaultState, action) => {
  console.log('====>');
  switch (action.type) {
    case 'ADD_TO_CART':
    
      let newState = {...state};
      // console.log('======)))',newState,action.payload,newState.selectedItems[items])
      if (action.payload.checkboxValue) {
        console.log("ADD TO CART",newState);

      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
    }
    else {
      console.log("REMOVE FROM CART");
      newState.selectedItems = {
        items: [
          ...newState.selectedItems.items.filter(
            (item) => item.title !== action.payload.title
          ),
        ],
        restaurantName: action.payload.restaurantName,
      };
    }
      console.log(newState, '👉', action.payload);
      return newState;



    default:
      return state;
  }
};

export default cartReducer;


    // case "ADD_TO_CART":
    //     console.log(state);
    //     return{
    //         ...state,
    //         selectedItems : {
    //             item: [...state.selectedItems.item, action.payload],
    //             restaurantName: action.payload.title
    //         }
    //     }


  