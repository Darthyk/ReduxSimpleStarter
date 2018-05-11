
//state arg is not app state, it is state for this reducer
export default function (state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}