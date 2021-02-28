export default function ValidateInfo (values){
    let errors = {}
//username
    if (!values.username.trim() ){
        errors.username= "username required"
    }


    //Email 
    if(!values.email) {
        errors.email ="Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]$/i.test(values.email)){
        errors.email = "Email address is invalid"
    } 
//password
    if (!values.password){
        errors.password = 'Password is required' 

    } else if(values.password.length < 6){
        errors.password = 'Password need to be 6 characters or more'
    }
//Passwords2
    if (!values.password2){
        errors.password2 = 'Password is required'
    } else if (values.password2 !==values.password ){
        errors.password2 = 'Passwords do not match '

    } 

    return errors;
}