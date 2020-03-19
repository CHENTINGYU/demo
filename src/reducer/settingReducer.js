// import {createActions, handleActions} from 'redux-actions';
// import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

// export const {
//    addNumber
// } = createActions({
//     AddNumber :null
// });

// export const reducer = handleActions(
//     {
//         GetNumer: (state, action) => ({
//             AddNumber = action.payload + 1
//         })
//     },
//     {
//        number:0
//     }
// );

let settingState = {
    b: 2
}
export default (state = settingState , action) => {
    if(action.type == "ADD"){
        return {
            "b" : state.b + 2
        }
    }
    return state;
}