import {useState} from 'react';

export const useForm = (initialState) => {
    const [formValues, setFormValues] = useState(initialState);

    //para cambair losdatos y actualizar el estado del formulario
    const onChange = (value, field) => {
        setFormValues({
            ...formValues,
            [field]:value,
        })
    }

    //Para resetear el formulario
    const setFormUpdate = (form) => {
        setFormValues(form);
    }

    return{
        ...formValues,
        state:formValues,
        onChange,
        setFormUpdate   
}

}
