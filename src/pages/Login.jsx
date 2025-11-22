import { use, useState } from "react";
import { loginUser } from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errr, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const data = await loginUser({ email, password });
      setMessage("Logged in!");
      console.log("TOKEN:", data.token);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Password</label>
          <br />
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
          {errr && <p style={{ color: "red" }}>{errr}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}
        </div>
      </form>
    </div>
  );
}
