import {configureStore} from '@reduxjs/toolkit'

import rootReducer from "@store/root.reducer";

const store = configureStore(
    {
        reducer: rootReducer
    }
);

export type RootState = ReturnType<typeof store.getState>

const { dispatch } = store;

export { dispatch };

export default store;
