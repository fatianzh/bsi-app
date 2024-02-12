const initialState = {
    counter: 0,
    notes: [],
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        case 'ADD_NOTE':
            return {...state, notes: [...state.notes,action.payload]};
        case 'DELETE_NOTE':
            const newNotes = state.notes.filter((notes, index) => index != action.payload);
            return {...state, notes: newNotes};
        case 'EDIT_NOTE':
            const{ index, newText } = action.payload;
            const updateNotes = state.notes.map((notes, idx) => {
                if (idx === index) {
                return newText;
                }
                return notes;
            })
            return {...state, notes: updateNotes}
        default:
            return state;
    }
}
export default reducers;

