"use client"
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = () => {
    setEmailError("");
    setPasswordError("");
    let valid = true;

    if(!email.includes("@")){
      setEmailError("Valid email required");
      valid = false;
    }
    if(password.length < 8){
      setPasswordError("Min 8 characters");
      valid = false;
    }
    if(valid){
      alert("Settings Saved Successfully!");
      localStorage.setItem("email", email);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">FlyRank Login</h1>
        
        <div className="mb-4">
          <input 
            type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            placeholder="Email" 
            className="border border-gray-300 p-2 w-full rounded"
          />
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        </div>

        <div className="mb-4">
          <input 
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            placeholder="Password" 
            className="border border-gray-300 p-2 w-full rounded"
          />
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        </div>

        <button 
          onClick={handleSubmit} 
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
      
      <footer className="bg-[#1e3a8a] text-white text-center p-4 w-full mt-10">
        <p>©️ 2026 Atharva Vats Singh | FlyRank Impact Project</p>
      </footer>
    </main>
  )
}