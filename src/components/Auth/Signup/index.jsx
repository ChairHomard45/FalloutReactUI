import { useState } from 'react'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [fic, setfic] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Send a request to your server's /signup endpoint with the email and password
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="Home-div-container-label">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="Home-div-container-label">
        <label>
          Fic:
          <input
            type="text"
            value={fic}
            onChange={(e) => setfic(e.target.value)}
          />
        </label>
      </div>
      <div className="Home-div-container-label">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="Home-div-container-label">
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Signup</button>
    </form>
  )
}

export default Signup
