import React from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import styles from './index.module.css'

export default function Login() {
  const handleSubmit=((e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  })
  return (
    <div className={styles.content}> 
      <h3>Sign-in to your account</h3>
      <form>
      <Input valueType={'text'} placeholder='Email Address' name='email'/>
      <Input valueType={'text'} placeholder='Password' name='password'/>
      <Button value='Login' buttonType='submit' disabled/>
      </form>
      <div>
        <p>Remember me</p>
        <Button value='Forgot password?' buttonType='button' disabled/>
      </div>
      <p>or login with</p>
      <Button value='Google' buttonType='button' disabled/>
      <div>
        <p>Don't have an account now?</p>
        <Button value='Sign up now' buttonType='button' disabled/>
      </div>
    </div>
  )
}
