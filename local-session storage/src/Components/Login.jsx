import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

const Login = () => {
  let [name,setName] = useState();
  let [price,setPrice] = useState();
  let array = [];
  const submit = (e) => {
    e.preventDefault();
    let object = {
      name : name,
      price : `${price}$`,
    }
    array.push(object)
    console.log(array)
    localStorage.setItem("data", JSON.stringify(array))
  } 
  return (
    <div className='form'>
      <h1>Login here</h1>
      <Container>
        <form onSubmit={(e)=>submit(e)}>
          Enter Mail : <input type="text" className='mail' value={name} onChange={(e)=>setName(e.target.value)} /><br />
          Enter Password  : <input type="text" className='pass' value={price} onChange={(e)=>setPrice(e.target.value)} /><br />
          <input type="submit" value="add" className='submit' />
        </form>
      </Container>
    </div>
  )
}

export default Login
