import React from 'react'
import {Formik, Form,Field} from 'formik';

export const MaterialsForm = ({ onSubmit }) => {
    const handleSubmit = async (valeus, actions) => {
        await onSubmit(valeus)
        actions.setSubmitting(false);
        actions.resetForm();
    };
    
    return (
        <Formik
            initialValues={{ title: '', link: "" }}
            onSubmit={handleSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <label>
                        Ask
                        <Field name='title' type='text' />
                    </label>
                    <label>
                        Link
                        <Field name='link' type='text' />
                    </label>
                    <button
                        type='submit'
                        disabled={isSubmitting}
                    >
                        Add material
                    </button>
                </Form>
            )}
        </Formik>
    )
}
