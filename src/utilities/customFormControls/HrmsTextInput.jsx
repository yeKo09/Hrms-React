import React from 'react'
import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react';

export default function HrmsTextInput({...props}) {
    //console.log(props);

    const [field,meta] = useField(props)

    const {name , label ,  ...rest} = props;

    //console.log(meta);

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label htmlFor={name}>{label}</label>
            <input {...field} {...rest}/>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}
        </FormField>
    )
}
