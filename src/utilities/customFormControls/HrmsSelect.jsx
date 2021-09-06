import { Field,ErrorMessage } from 'formik';
import React from 'react'
import { Label,FormField } from 'semantic-ui-react';

export default function HrmsSelect(props) {

    const { label, name, options, ...rest } = props;

    return (
        <FormField>
            <label htmlFor={label}>{label}</label>
            <Field as="select" name={name} id={name} {...rest}>
                {
                    options.map(option => {
                        return (
                            <option key={option.key} value={option.value}>
                                {option.text}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} render={error =>
                <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
        </FormField>
    )
}
