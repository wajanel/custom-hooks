
export const todoReducer = (initialValue, action)=>{

    switch (action.type) {
        case '[TODO] add':
            return [...initialValue, action.payload];
        case '[TODO] remove':
            return initialValue.filter(obj => obj.id != action.payload );
        case '[TODO] toggle':
            return initialValue.map(
                todoA => {
                    if (todoA.id === action.payload ) {
                        todoA.done = !todoA.done
                    }
                    return todoA
                }

            )
        default:
            return initialValue;
    }

}