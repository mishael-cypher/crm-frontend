import React, { useState } from 'react'

import { Login } from '../../components/login/Login'
import { ResetPassword } from '../../components/reset-password/ResetPassword'

import './entry-style.css'

export const Entry = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formLoad, setFormLoad] = useState('login')

    const handleOnChange = e => {
        const {name, value} = e.target

        switch(name){
          case 'email':
            setEmail(value)
          break
          case 'password':
            setPassword(value)
          break

          default:
            break
        }
        console.log(name, value)
    }

    const handleOnSubmit = e => {
      e.preventDefault()

      if(!email || !password){
        return alert('fill up the form')
      }

      // TODO call api to submit the form
      console.log(email, password)
      console.log(e)
    }

    const formSwitcher = formType => {
      setFormLoad(formType)
    }

    const handleOnResetSubmit = e => {
      e.preventDefault()

      if(!email){
        return alert("Please Enter Your Email")
      }
      // TODO call api to submit the form
      console.log(email)
      console.log(e)
    }

  return (
    <div className='entry-page bg-info'>
        <div className="bg-light p-5 rounded-lg m-3 form-box">
          {formLoad === "login" && (
            <Login 
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
            />
          )}
          {formLoad === "reset" && (
            <ResetPassword 
            handleOnResetSubmit={handleOnResetSubmit}
            handleOnChange={handleOnChange}
            formSwitcher={formSwitcher}
            email={email}
            />
          )}

          </div>
    </div>
  )
}
