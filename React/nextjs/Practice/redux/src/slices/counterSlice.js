import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const generateRandomNumber = createAsyncThunk(
    'products/generateRandomNumber',
    async (_, thunkApi) => {
        try {
            const response = await axios.get('/api/random-number');
            return response.data; // returning data so builders can access it, this line "state.value = action.payload" won't work if data doesn't return
        }
        catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

const initialValue = {
    value: 0,
    loading: false,
    error: null
}

export const counterSlice = createSlice({
    name: 'products', // name of slice
    initialState: initialValue,
    reducers: {   	 // Functions will be defined in this reducer object that update the state(initialValue) in response to actions
        increment: (state, action) => { state.value += 1 },  // action is the parameter which will be send in the dispatch function
        decrement: (state, action) => { state.value -= 1 },  // state represents the initialValue (updating the value with this function)
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {   // extraReducers for Thunk
        builder
            .addCase(generateRandomNumber.pending, (state, action) => {     // when api is pending
                state.loading = true;
            })
            .addCase(generateRandomNumber.fulfilled, (state, action) => {   // when api is fulfilled
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(generateRandomNumber.rejected, (state, action) => {    // when api return error (500,400 etc)
                state.loading = false;
                state.error = action.payload
            })
    }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions; // export the reducers
export default counterSlice.reducer;