const initialState = {
  userInfo: null, /* this is an object that holds:
                      name - string
                      email - string
                      location? - optional
                      shippingAddresses  - and array of objects that have:
                        - street: string
                        - number: integer
                        - postalCode: string
                        - default: Boolean (whether this is the default address)
                        - description (optional): string (something like 'there's a dog in the house' or 'end of the court yard to the right')\
                        - label (optional): string ('home', 'work', 'parents'....)
                        - ANY MORE?
                  */
  status: 'not-logged-on', /* -'not-logged-on'
                              -'logged-on'
                              -'purchasing'
                              -'error'
                              -'fetching'
                              -?
                            */
  cart: {}, /*an object of item objects.
                we will add to each object a 'quantity' key.
              */
}

export default function cartReducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state)); // this creates a 'Deep Copy' of the state
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      if(newState.cart[action.item.id]){
        newState.cart[action.item.id].quantity = Number(newState.cart[action.item.id].quantity) + 1;
      } else {
        newState.cart[action.item.id] = {
          ...action.item,
          quantity: 1,
        }
      }
      return {
        ...newState,
      };

    case 'CHANGE_QUANTITY_OF_ITEM':    
      newState.cart[action.id].quantity = action.newQuantity;
      return {
        ...newState,
      }

    case 'REMOVE_ITEM_FROM_CART':
      delete newState.cart[action.id];
      return {
        ...newState,
      }
    case 'ADD_TOTAL_TO_CART':
      newState.cart.total = action.total;
      return {
        ...newState,
      }
    default:
      return newState;
  };
};