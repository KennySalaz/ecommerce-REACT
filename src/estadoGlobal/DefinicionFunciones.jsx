export const initialState = {
    addCar: [],
    user: null,
}

export const actionTypes = {
    ADD_TO_CARD: "ADD_TO_CARD",
    REMOVE_ADD: "REMOVE_ADD",
    USER_FIREBASE: "USER_FIREBASE",
    VACIAR_CARRITO: "VACIAR_CARRITO"

}

export const addCarTotal = (addCar) => {

    addCar?.reduce((amount, item) => item.price + amount, 0)

}

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CARD":
            return {
                ...state,
                addCar: [...state.addCar, action.item]
            };
        case "REMOVE_ADD":
            const index = state.addCar.findIndex((addCardItem => addCardItem.id === action.id))
            let newAddCard = [...state.addCar];
            if (index >= 0) {
                newAddCard.splice(index, 1)
            } else { console.log("Cant remove product") }

            return {
                ...state,
                addCar: newAddCard
            };
        case "USER_FIREBASE":
            return {
                ...state,
                user: action.user
            }
        case "VACIAR_CARRITO" :
            return{
                ...state,
                addCar : action.addCar
            }
        default: return state;

    }

}

export default reducer