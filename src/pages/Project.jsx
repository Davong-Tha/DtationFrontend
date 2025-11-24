//this place is going to list all the projects later but for now it is just for creating project

import { useState } from "react";
import { CreateProject } from "../api/Project.api"
import { useAuth } from "../context/Auth.context"

export default function Project(){
  const [name, setName] = useState("");
  const {loginToken} = useAuth()

  const [message, setMessage] = useState("");
  const [errr, setError] = useState("");
  async function handleSubmit(e){
    e.preventDefault();
    setMessage("")
    setError("")
    console.log( "token", loginToken)
    try{
      
      const data = await CreateProject({name, token: loginToken})
      setMessage("Project Created!")
      console.log(data)
    }catch (err){
      setError(err.message)
    }
  }
  return (
    <div>
      <h1>Create Project</h1>
      <form onSubmit={handleSubmit}>
        <label>Project Name</label><br/>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Create Project</button>
      </form>
    </div>
  )

  
}