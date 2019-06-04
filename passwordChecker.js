const checkUpperCase = /[A-Z]/;
const checkLowerCase = /[a-z]/;
const checkNumber = /[0-9]/;

let password_is_valid = (password) =>{

 if (password == "")
    throw new Error("password must not be null");
  
  if (!checkUpperCase.test(password))
    throw new Error("password must have atleast 1 uppercase letter");
  
  if (!checkLowerCase.test(password))
    throw new Error("password must have atleast 1 lowercase letter");
  
  if (!checkNumber.test(password))
    throw new Error("password must have atleast 1 number");      

  if (password.length < 9)
    throw new Error("password must be longer than 8");

};

let password_is_ok = (password) => {

if (password != "" && checkLowerCase.test(password) && checkNumber.test(password) && checkUpperCase.test(password) && password.length > 8)
  return true;
else 
  return false;
}
