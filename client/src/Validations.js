import * as Yup from 'yup';

const LoginValidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required"),
});

export { LoginValidation };