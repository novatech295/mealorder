import * as yup from 'yup';

export const useSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    location: yup.string().required("location is required"),
    number: yup.string().matches(/^\d{10}$/, "phone number must be 10 digits").required("phone number is required")
});