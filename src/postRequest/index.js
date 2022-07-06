import './styles.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

function PostRequest(props) {
    const {boolMod} = props;
    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
    
    const formik = useFormik({        
        initialValues: {
            name: "",
            company: "",
            email: "",
            address: "",
            phone: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
            company: Yup.string().max(25, "Must be 25 characters or less").required("Required"),
            email: Yup.string().email("Invalid email addresss`").required("Required"),
            address: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
            phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required"),
        }),
        onSubmit: (values) => {
            try {
                axios.post('https://jsonplaceholder.typicode.com/users',
                {
                    name:values.name,                    
                    email:values.email,
                    phone:values.phone,
                    address:{
                        city:values.address}
                    ,
                    company:{
                        name:values.company}
                    })                
            } catch (error){
                console.log(error.response);
            }
        }

    });         


    return (
        <>
            <div className='fonds2' onClick={boolMod}></div>
            <div className='fonds'>
                <div className='form_fonds'>
                    <button className='btn_cancel' onClick={boolMod}>X</button>
                    <h2>INFORMATION</h2>
                    <form action="" className='form_class' onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                        <div className='form_contenu'>
                            <label htmlFor="id" className='label_input'>Name</label>
                            <input
                                id="name"
                                type="text"
                                className="input_formulaire"
                                placeholder='Full Name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.name ? <p> {formik.errors.name} </p> : null}
                        </div>

                        <div className='form_contenu'>
                            <label htmlFor="id" className='label_input'>Address</label>
                            <input
                                id="address"
                                type="text"
                                className="input_formulaire"
                                placeholder='address'
                                value={formik.values.address}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.address ? <p> {formik.errors.address} </p> : null}
                        </div>

                        <div className='form_contenu'>
                            <label htmlFor="id" className='label_input'>Phone Number</label>
                            <input
                                id="phone"
                                type="text"
                                className="input_formulaire"
                                placeholder='Phone number'
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.phone ? <p> {formik.errors.phone} </p> : null}
                        </div>                      
                        
                        <div className='form_contenu'>
                            <label htmlFor="id" className='label_input'>Email</label>
                            <input
                                id="email"
                                type="text"
                                className="input_formulaire"
                                placeholder='Email address'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email ? <p> {formik.errors.email} </p> : null}
                        </div>

                        <div className='form_contenu'>
                            <label htmlFor="id" className='label_input'>Company</label>
                            <input
                                id="company"
                                type="text"
                                className="input_formulaire"
                                placeholder='Company name'
                                value={formik.values.company}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.company ? <p> {formik.errors.company} </p> : null}
                        </div>

                       

                        <button type='submit' className='btn_envoie btn_type'>Submit</button>
                    </form>
                </div>
            </div>

        </>

    );
}

export default PostRequest;