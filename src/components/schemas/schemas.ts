import * as yup from 'yup';


const phoneRegExp = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;


export const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    phoneNumber: yup.string().matches(phoneRegExp, "Phone Number is not valid.").max(15, 'Phone number is too long').required("Required"),
    firstName: yup.string().min(2, "Must be at least 2 characters").required("Required"),
    lastName: yup.string().min(2, "Must be at least 2 characters").required("Required"),
    address: yup.string().min(2, "Must be at least 2 characters").required("Required"),
    city: yup.string().min(2, "Must be at least 2 characters").required("Required"),
    zipCode: yup.number().positive().integer().min(10000, "Zip code should be 5 digits")
    .max(99999, "Zip code should be 5 digits").required("Required"),
    service: yup.string().required("Please select an option"),

});


    
