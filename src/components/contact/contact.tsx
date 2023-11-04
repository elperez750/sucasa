
import { FormikHelpers, useFormik} from 'formik';
import { schema }  from "../schemas/schemas";
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import * as emailjs from 'emailjs-com';



interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipCode: string;
  projectDescription: string;
  service: string;
}


interface EmailJSResponse {
  status: number;
  text: string;
}




export default function contact (){
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      city: '',
      zipCode: '',
      projectDescription: '',
      service: '',

  
    }, 
    validationSchema: schema,
    onSubmit: async (values: FormValues, actions: FormikHelpers<FormValues>) => {
      try {
        const templateParams = {
           from_name: values.firstName + " " + values.lastName,
           email: values.email,
           phoneNumber: values.phoneNumber,
           address: values.address,
           city: values.city,
           zipCode: values.zipCode,
           projectDescription: values.projectDescription,
           service: values.service
        };
      

      emailjs.send('service_jy4p1bn', 'template_hsrwwo9', templateParams, "Onulb7SasC11BK-9j")
      .then((response: EmailJSResponse) => {
        console.log('Email successfully sent!', response);
      })
      .catch((error: EmailJSResponse) => {
        console.error('There was an error sending the email.', error);
      });
    } catch (error) {
      console.log(error);
    }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
  }
  });

  console.log(errors)


  function handlePhoneNumberChange(event: { target: { value: any; }; }) {
    let value = event.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 6) {
        value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`;
    } else if (value.length > 3) {
        value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }

    setFieldValue("phoneNumber", value);
}


  return (
    <>
    
      <div className='image-container'>
      <div className="parallax-contact">
    
      </div>
    <div className="service">Contact us</div>
    <h2 className='other-caption-contact'><span>START YOUR NEXT PROJECT TODAY</span></h2>

  </div>

    <h1>Schedule your FREE estimate</h1>
    <div className="row">
      <div className="col-lg-6">
         
        </div>

    <div className="contact-form col-lg-6">
    <h1>Tell us about your Project</h1>
          <p>We are happy to assist you with a free estimate of your project. Fill out the secure form below and we will be in contact with you within one business day.</p>
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className='row'>
        <div className="col-lg-6 contact-input">

        <label htmlFor='firstName' className='form-label'>First Name</label>
        <input
          value={values.firstName}
          onChange={handleChange}
          id="firstName"
          type='text'
          name='firstName'
          placeholder='Enter your first name'
          onBlur={handleBlur}
          className={errors.firstName && touched.firstName ? ' form-control input-error' : 'form-control'}
          />
        

        {errors.firstName && touched.firstName && <p className="errors">{errors.firstName}</p>}
        </div>

        <div className="col-lg-6 contact-input">
      <label htmlFor='lastName' className="form-label"> Last Name</label>

      <input 
      value={values.lastName}
      onChange={handleChange}
      id="lastName"
      type='text'
      name='lastName'
      placeholder='Enter your last name'
      onBlur={handleBlur}
      className={errors.lastName && touched.lastName? 'form-control input-error' : 'form-control'}
      />
      {errors.lastName && touched.lastName && <p className="errors">{errors.lastName}</p>}
      </div>

      <div className="col-lg-6 contact-input">
      <label htmlFor='email' className="form-label">Email</label>
      <input 
      value={values.email}
      onChange={handleChange}
      id="email"
      type='email'
      placeholder='Enter your email address'
      onBlur={handleBlur}
      className={errors.email && touched.email? 'form-control input-error' : 'form-control'}

      />

      {errors.email && touched.email && <p className="errors">{errors.email}</p>}
      </div>

      
      <div className="col-lg-6 contact-input">
      <label htmlFor='phoneNumber' className="form-label">Phone Number</label>
      <input 
      value={values.phoneNumber}
      onChange={handlePhoneNumberChange}
      id="phoneNumber"
      type='text'
      name='phoneNumber'
      placeholder='(XXX) XXX-XXXX'
      onBlur={handleBlur}
      maxLength= {14} 
      className={errors.phoneNumber && touched.phoneNumber? 'form-control input-error' : 'form-control'}
      />
      {errors.phoneNumber && touched.phoneNumber && <p className="errors">{errors.phoneNumber}</p>}
      </div>


      <div className="col-lg-6 contact-input">
      <label htmlFor='address' className="form-label">Address</label>
      <input 
      value={values.address}
      onChange={handleChange}
      id="address"
      type='text'
      name='address'
      placeholder='Enter your address'
      onBlur={handleBlur}
      className={errors.address && touched.address? 'form-control input-error' : 'form-control'}
      />
      {errors.address && touched.address && <p className="errors">{errors.address}</p>}
      </div>

      <div className="col-lg-6 contact-input">
      <label htmlFor='city' className="form-label">City</label>
      <input 
      value={values.city}
      onChange={handleChange}
      id="city"
      type='text'
      name='city'
      placeholder='Enter your city'
      onBlur={handleBlur}
      className={errors.city && touched.city? 'form-control input-error' : 'form-control'}
      />
      {errors.city && touched.city && <p className="errors">{errors.city}</p>}
      </div>

      <div className="col-lg-6 contact-input">
      <label htmlFor='zipCode' className='form-label'>Zip Code</label>
      <input 
      value={values.zipCode}
      onChange={handleChange}
      id="zipCode"
      type='number'
      name='zipCode'
      placeholder='Enter your zip code'
      onBlur={handleBlur}
      className={errors.zipCode && touched.zipCode? 'form-control input-error' : 'form-control'}
      />
      {errors.zipCode && touched.zipCode && <p className="errors">{errors.zipCode}</p>}
      </div>

    <div className="col-lg-6 contact-input">
      <label className="form-label" htmlFor="service">Service</label>
      <select name='service' value={values.service} onChange={handleChange} onBlur={handleBlur}id="service" className={errors.service && touched.service? 'form-select input-error' : 'form-select'}
>
        <option value="">-Choose-</option>
        <option value="Interior">Interior Painting</option>
        <option value="Exterior">Exterior Painting</option>
        <option value="Commercial">Commercial Painting</option>
        <option value="Pressure">Pressure Washing</option>

      </select>
      {errors.service && touched.service && <p className="errors">{errors.service}</p>}


      </div>



      <div className="col-lg-12 contact-input">
      <label htmlFor='projectDescription' className="form-label">Project Description</label>
      <textarea 
      rows={7}
      value={values.projectDescription}
      onChange={handleChange}
      id="projectDescription"
      name='projectDescription'
      placeholder='Enter your project description'
      onBlur={handleBlur}
      className={errors.projectDescription && touched.projectDescription? 'form-control input-error' : 'form-control'}
      />
      {errors.projectDescription && touched.projectDescription && <p className="errors">{errors.projectDescription}</p>}
      </div>
      </div>
      <button disabled={isSubmitting} type='submit' className="btn btn-success form-button">Submit</button>
    
    </form>
    </div>
    </div>

    </>

  )

    
}

function setFieldValue(arg0: string, value: any) {
  throw new Error('Function not implemented.');
}
