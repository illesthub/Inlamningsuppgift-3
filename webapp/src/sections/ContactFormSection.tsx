import React, { useState } from 'react'

interface ContactFormType {
  name?: string
  email?: string
  comments?: string
}

interface ContactFormErrors {
  name?: string
  email?: string
  comments?: string
}


const submitData = async (url: RequestInfo | URL, method: string, data: string, contentType = 'application/json') => {

  const res = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': contentType
    },
    body: data
  })
  
    if (res.status === 200) {
      return true
    }
      return false
}

const validate = (form: any, e?: any) => {
  if (e?.type === 'submit') {
   const errors = {} as any
   errors.name = validate_name(form.name)
   errors.email = validate_email(form.email)
   errors.comments = validate_comments(form.comments)
   return errors

  } else {
    console.log(e)
       const {id, value} = e.target
       switch(id) {
           case 'name':
               return validate_name(value)
           case 'email':
               return validate_email(value)
           case 'comments':
               return validate_comments(value)
       }
  }
}

const validate_name = (value: string) => {
  if (!value)
      return 'A name is required'
  else if (value.length < 2)
      return 'Must be a valid name'
  else
      return null
}

const validate_email = (value: string) => {
  const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  if (!value)
      return 'An email address is required'
  else if (!regex_email.test(value))
      return 'Must be a valid email address'
  else
      return null
}

const validate_comments = (value: string) => {
  if (!value)
      return 'A comment is required'
  else if (value.length < 5)
      return 'Your comment must be at least 5 characters long'
  else
      return null
}

const ContactFormSection: React.FC<ContactFormType> = () => {
  let currentPage = "Contact Us"
  window.parent.document.title = `${currentPage} || Fixxo` 

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [failedSubmit, setFailedSubmit] = useState(false)

  const handleChange = (e?: any) => {
    const {id, value} = e.target

    switch(id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comments':
        setComments(value)
        break
    }

    setErrors({...errors, [id]: validate({}, e)})
  }

  const handleSubmit = async (e: any, validate: any) => {
    console.log(e)
    e.preventDefault()
    setFailedSubmit(false)
    setSubmitted(false)
    setErrors(validate({name, email, comments}, e))
  
    if (errors.name === null && errors.email === null && errors.comments === null) {

      let json = JSON.stringify({ name, email, comments})
      console.log(json)

      setName('')
      setEmail('')
      setComments('')
      setErrors({})

      if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json)) {
        setSubmitted(true)
        setFailedSubmit(false)
      } else {
        setSubmitted(false)
        setFailedSubmit(true)
      }
    } 
    else {
      setSubmitted(false)
    }
  }

  return (
    <section className="contact-form mt-5">
      <div className="container">
        
        {
          submitted ? (
          <div className="alert alert-success text-center mb-5" role="alert">
            <h3>Thank you for your comments</h3> 
            <p>We will contact you as soon as possible.</p>
            </div>  ) : (<></>)
        }

{
          failedSubmit ? (
          <div className="alert alert-danger text-center mb-5" role="alert">
            <h3>Something went wrong!</h3> 
            <p>We could not submit your comment, please try again later.</p>
            </div>  ) : (<></>)
        }
        
        
        <h2>Come in Contact with Us</h2>
        <form onSubmit={(e: any) => handleSubmit(e, validate)} noValidate>
          <div>
            <input id="name" className={(errors.name ? 'error': '')} value={name} onChange={handleChange} type="text" placeholder="Your Name" />
            <div className="errorMessage">{errors.name}</div>
          </div>
          <div>
            <input id="email" className={(errors.email ? 'error': '')} value={email} onChange={handleChange} type="email" placeholder="Your Mail" />
            <div className="errorMessage">{errors.email}</div>
          </div>
          <div className="textarea">
            <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} value={comments} onChange={handleChange} placeholder="Comments"></textarea>
            <div className="errorMessage">{errors.comments}</div>
          </div>
          <div className="formBtn">
            <button type="submit" className="btn-theme">Post Comments</button>
          </div>
        </form>    
      </div>
    </section>
  )
}

export default ContactFormSection