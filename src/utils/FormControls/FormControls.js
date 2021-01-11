import React from "react";
import style from './FormControls.module.css';

const FormControl = ({meta, children}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : '')}>
            <div>
                {children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    if (input.name === "email") {
        input.value = 'shafarenkomaksym@gmail.com';
    }
    if (input.name === "password") {
        input.value = '1q2w3e4r5t';
    }
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}