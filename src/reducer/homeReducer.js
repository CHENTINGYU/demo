// import {createActions, handleActions} from 'redux-actions';
// import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

// export const {
//    changeNumber
// } = createActions({
//     ChangeNumber :null
// });

// export const reducer = handleActions(
//     {
//         GetNumer: (state, action) => ({
//             number = action.payload
//         })
//     },
//     {
//        number:1
//     }
// );
let homeState = {
    a: 10
}
export default (state = homeState , action) => {
    if(action.type == "ADD"){
        return {
            "a" : state.a + 3
        }
    }
    return state;
}