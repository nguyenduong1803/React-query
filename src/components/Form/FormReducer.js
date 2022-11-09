const INIT_STATE = {
    name: "",
    email: "",
    price: "",
    desc: "",
    quantity: "",
    status: "",
    number: 0,
}
const FormReducer = (state, action) => {
    switch (action.type) {
        case "ChangValue":
            return { ...state, [action.payload.name]: action.payload.value }
        case "increase":
            return { ...state, number: state.number + 1 }
        case "decrease":
            return { ...state, number: state.number - 1 }
        default:
            return state
    }
}
export { FormReducer, INIT_STATE }