import React from 'react'
import Input from '../components/Input'

export default function Login() {
  const handleSubmit=((e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  })
  return (
    
    <div> 
      <h3>Sign-in to your account</h3>
      <form>
      <Input valueType={'text'} placeholder='Email Address' name='email'/>
      <Input valueType={'text'} placeholder='Password' name='password'/>
      </form>
    </div>
  )
}
