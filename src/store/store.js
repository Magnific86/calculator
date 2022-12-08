import { configureStore } from "@reduxjs/toolkit"
import { dataReducer } from "./dataReducer"
import { themeReducer } from "./themeReducer"



const store = configureStore({reducer:
{
    theme: themeReducer,
    data: dataReducer,
}
})

export default store