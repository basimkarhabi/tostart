import React , {useState}from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
    const  [isSubmitting, setIsSubmitting] = useState(false)

    function submitForm(){
        setIsSubmitting(true)

    }



    return (
        <>
            <div className = "form-container">
                <span className= "close-btn ">X</span>
                    <div className = "form-content-left">
                        <img src = "img/img-2.svg" 
                        alt = "spaceship" 
                        className = "form-img" />
                    </div>

            {!isSubmitting ? (<FormSignup submitForm={submitForm} />):(<FormSuccess />) }   
            </div>
        </>
    )
}

export default Form
