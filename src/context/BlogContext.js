import createDataContext from "./createDataContext";

const memoReducer = (state, action) => {
        switch (action.type) {
            case 'add-memo' :
                return [
                    ...state,
                    { 
                        id: Math.floor(Math.random() * 99999),
                        time : action.payload.time,
                        title: action.payload.title,
                        detail: action.payload.detail,
                        status : `not done`
                    },];
            case 'del-memo' :
                return state.filter(memo => memo.id != action.payload);
            case 'edit-memo' :
                return state.map((memo) => 
                    memo.id === action.payload.id? action.payload : memo);
            default:
                return state;
        }
}
    const addMemo = dispatch => {
        return (time, title, detail) => {
            dispatch({type: 'add-memo', payload:{time, title, detail}})
        }};

    const delMemo = dispatch => {
        return id => {
            dispatch({type: 'del-memo', payload: id})
        }};

    const editMemo = dispatch => {
        return (id, time, title, detail, status) => {
            dispatch({type: 'edit-memo', payload: {id, time, title, detail, status}})
        }};

export const { Context, Provider } = createDataContext(
    memoReducer,{addMemo, delMemo, editMemo},[{id:'0000', time : '00:00 A.M', title: 'Title000', detail: '0000000000', status:'not done'}]
);