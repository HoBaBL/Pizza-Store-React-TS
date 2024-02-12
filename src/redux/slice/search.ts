import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    SearchRedux: ''
}

const SearchRedux = createSlice({
    name: 'searchRedux',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.SearchRedux = action.payload
        }
    }
})

export const { setSearch } = SearchRedux.actions;

export default SearchRedux.reducer