import React from 'react'
import useForm from './useForm'
import ValidateInfo from './ValidateInfo'
import'./Form.css'


const FormSignup = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors} = useForm(submitForm ,ValidateInfo);


    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1> Get Start with us today! </h1>
                <div className="form-inpouts">
                        <label htmlFor="username"
                            className="form-label">

                            username 
                        </label>      
                        <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        value ={values.username}
                        onChange = {handleChange}
                        /> 
                        {errors.username &&<p>{errors.username}</p>}    
                </div>


                <div className="form-inpouts">
                    <label htmlFor="email"
                        className="form-label">
                            Email
                    </label> 

                    <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value ={values.email}
                    onChange = {handleChange}
                    />     
                    {errors.email &&<p>{errors.email}</p>}
                </div>

                <div className="form-inpouts">
                    <label htmlFor="password"
                        className="form-label">
                            Password
                    </label> 

                    <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value ={values.password}
                    onChange = {handleChange}
                    />     
                    {errors.password &&<p>{errors.password}</p>}
                </div>
                <div className="form-inpouts">
                    <label htmlFor="password2"
                        className="form-label">
                           Confirm Password
                    </label> 

                    <input
                    id="password2"
                    type="password"
                    name="password2"
                    className="form-input"
                    placeholder="Enter your password2"
                    value ={values.password2}
                    onChange = {handleChange}
                    />  
                    {errors.password2 &&<p>{errors.password2}</p>}      
                </div>
                <button className="form-input-btn" 
                type="submit">
                    Sign up 
                 </button>    
                    <span className="form-input-login">
                        Alert have an Account ? Login<a href="#"
                        > here</a>
                    </span>
            </form>
        </div>        
    )
}

export default FormSignup