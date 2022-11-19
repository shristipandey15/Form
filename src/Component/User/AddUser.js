import React,{useState} from 'react'
import Card from '../UI/Card';
import  './AddUser.module.css';
import Button from '../UI/Button';


function Adduser() {

const [enteredUsername , setEnteredUsername] = useState('')
const [enteredAge , setEnteredAge] = useState('')
const [enteredEmail , setEnteredEmail] = useState('')
const [enteredPassword , setEnteredPassword] = useState('')


    const addUserHandler=(e)=>{
        e.preventDefault();
       
       
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0 ||enteredEmail.trim().length===0 || enteredPassword.trim().length===0 ){
          return;
        } 
          if(+enteredAge < 1){
            return;
          
        }
        console.log(enteredUsername,enteredAge, enteredEmail,enteredPassword)
setEnteredUsername('');
setEnteredAge('');
setEnteredPassword('');
setEnteredEmail('');

alert(`you are login into ${enteredUsername} ${enteredAge}${enteredEmail} ${enteredPassword}` )




    };

    const usernameChangeHandler=(e)=>{
setEnteredUsername(e.target.value);

    }

    const ageChangeHandler=(e)=>{
        setEnteredAge(e.target.value);
            }
            const passwordChangeHandler=(e)=>{
              setEnteredPassword(e.target.value);
             
                  }
                  const emailChangeHandler=(e)=>{
                    setEnteredEmail(e.target.value);
                   
                        }

           
  return (
  
    <Card className='box'>

<form onSubmit={addUserHandler}>
        <label htmlfor="username" >Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}>
         </input>

        <label htmlfor="age" >Age(Years)</label>
        <input type="number" id="number" value={enteredAge } onChange={ageChangeHandler}>
          </input>

          <label htmlfor="email" >Email</label>
        <input type="email" id="email" value={enteredEmail } onChange={emailChangeHandler}>
          </input>

          <label htmlfor="password" >password</label>
        <input type="password" id="password"  value={enteredPassword }onChange={passwordChangeHandler}>
        </input>
        <Button/>
       
    </form>

    </Card>
    )
    
  
}

export default Adduser