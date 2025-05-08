
// export const userSlice = createSlice({
    //   name: "user",
    //   initialState: {
        //     userInfo: null,
        //   },
        //   reducers: {
            //     setUser: (state, action) => {
                //       state.userInfo = action.payload;
                //     },
                //     logout: (state) => {
                    //       state.userInfo = null;
                    //     },
                    //   },
                    // });
                    
                    // 
                    // 
                    
                    import { createSlice } from "@reduxjs/toolkit";
                    const userSlice = createSlice({
                        name: 'user',
                        initialState: {
                            user: JSON.parse(localStorage.getItem('user')) || null,
                        },
                        reducers: {
                            setUser: (state, action) => {
                                state.user = action.payload;
                                localStorage.setItem('user', JSON.stringify(action.payload)); // ⬅ Save to localStorage
                            },
                            logout: (state) => {
                                state.user = null;
                                localStorage.removeItem('user'); // ⬅ Clear storage on logout
                            },
                        },
                    });
                    export const { setUser, logout } = userSlice.actions;
                    export default userSlice.reducer;