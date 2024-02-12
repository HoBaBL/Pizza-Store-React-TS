import { configureStore } from '@reduxjs/toolkit'
import BasketPizza from './slice/basketPizza'
import SearchRedux from './slice/search'


export const store = configureStore({
    reducer: { BasketPizza, SearchRedux },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch