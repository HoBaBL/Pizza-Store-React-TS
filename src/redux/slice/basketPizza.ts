import {createSlice} from '@reduxjs/toolkit'

type BasketPizzaItem = {
    id: string,
    imgCart: string,
    titleBasket: string,
    textBasket: string,
    priceBasket: number,
    count: number,
    type: string,
    size: number
}

interface BasketPizzaState {
    BasketPizza: BasketPizzaItem[]
}

const initialState: BasketPizzaState = {
    BasketPizza: []
}

const BasketPizza = createSlice({
    name: 'BasketPizza',
    initialState,
    reducers: {
        addCartPizza(state, action) {
            const samePizza = state.BasketPizza.find(o => o.id === action.payload.id)
            if (samePizza) {
                samePizza.count++
            } else {
                state.BasketPizza.push(action.payload)
            }
        },
        deletePizza(state, action) {
            state.BasketPizza = state.BasketPizza.filter(o => o.id !== action.payload.id)
        },
        clearPizza(state) {
            state.BasketPizza = []
        },
        PlusPizza(state, action) {
            const PlusPizza = state.BasketPizza.find(o => o.id === action.payload.id )
            if (PlusPizza) {
                PlusPizza.count++
            }
        },
        MinusPizza(state, action) {
            const PlusPizza = state.BasketPizza.find(o => o.id === action.payload.id)
            if (PlusPizza) {
                PlusPizza.count--
            }
            if (PlusPizza?.count === 0) {
                state.BasketPizza = state.BasketPizza.filter(o => o.id !== action.payload.id)
            }
        }
    }
})

export const {  addCartPizza, deletePizza, clearPizza, PlusPizza, MinusPizza} = BasketPizza.actions;

export default BasketPizza.reducer