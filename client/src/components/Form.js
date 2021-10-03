import React, { useState } from "react";

export function Form(props) {
  const [form, setForm] = useState({})
  
  const handleSubmit = (e) => {
      e.preventDefault();
  }

  const handleChange = (e) => {
      // update form state here
    // e.name // username, email, 
    // e.value // yung tinatype mo
    setForm({ ...form, [e.name]: e.value})
  }

    
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

// change id to 2