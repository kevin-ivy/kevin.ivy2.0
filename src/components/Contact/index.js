import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }

    return (
        <div id='my-contact' className='mt-5 p-5'>
            <div>
                <h6 className='text-center'>Let me know if you're interested in partnering on your current or latest project.</h6>
            </div>
            <form className='d-flex justify-content-center'>
                <div class='form-group w-100' style={{maxWidth: '500px'}}>
                    <br/>
                    <input type='text' defaultValue={name} onBlur={handleChange} name='name' placeholder='Name' className='form-control m-3 mx-auto w-100'/>
                    <input type='text' defaultValue={email} onBlur={handleChange} name='email' placeholder='Email' className='form-control m-3 mx-auto w-100'/>
                    <textarea defaultValue={message} onBlur={handleChange} name='message' placeholder='Message' rows='4' maxlength='250' className='form-control mt-3 mx-auto w-100'/>
                    <br/>
                    <button type="submit" className="btn btn-info mx-auto">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;