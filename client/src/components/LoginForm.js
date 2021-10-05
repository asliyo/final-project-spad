import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap'

export function LoginForm({onSubmit}) {
  const [form, setForm] = useState({})
  
  const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(form)
  }

  const handleChange = (e) => {
      // update form state here
    // e.name // username, email, 
    // e.value // yung tinatype mo
    setForm({ ...form, [e.target.name]: e.target.value})
  }
  
  return (
    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group 
        className="mb-3" 
        size="sm" 
        controlId="formBasicUsername"
      >
        <Form.Label>Username</Form.Label>
        <Form.Control           
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          placeholder="Username" 
          size="sm"
          />
      </Form.Group>

      <Form.Group 
        className="mb-3" 
        size="sm" 
        controlId="formBasicEmail"
      >
        <Form.Label>Email</Form.Label>
        <Form.Control           
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email" 
          size="sm"
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password" 
          size="sm"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

// change id to 2