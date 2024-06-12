import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onChangeTextBox = ({target}) => {
        const {name, value} = target;//target viene del event del input
        setFormState(
            {
                ...formState,
                [name]:value
            }
        )
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return ({
        formState,
        onChangeTextBox,
        onResetForm,
        ...formState
    })

}