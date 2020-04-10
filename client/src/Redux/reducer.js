const initialState = {
  id: null,
  status: 'loading', /* -'loading'
                        -'request'
                        -'idle'
                        -'error'
                        -ANY MORE?
                      */
  cart: null, /*an array of item objects.
                we will add to each object a 'quantity' key.
              */
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
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'value':
      
      break;
  
    default:
      return state;
  };
};