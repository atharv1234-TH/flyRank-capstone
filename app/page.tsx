"use client"
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    if(emailInput) emailInput.value = localStorage.getItem('email') || '';

    const form = document.getElementById('settingsForm');
    form?.addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      document.getElementById('emailError')!.innerText = "";
      document.getElementById('passwordError')!.innerText = "";
      
      const email = (document.getElementById('email') as HTMLInputElement).value;
      if (!email.includes('@')) { document.getElementById('emailError')!.innerText = "Valid email required"; valid = false; }
      
      const password = (document.getElementById('password') as HTMLInputElement).value;
      if (password.length < 8) { document.getElementById('passwordError')!.innerText = "Min 8 characters"; valid = false; }
      
      if(valid) { localStorage.setItem('email', email); alert("Settings Saved Successfully!"); }
    });
  }, []);

  return (
    <main>
      <header style={{background: '#1e3a8a', color: 'white', textAlign: 'center', padding: '20px'}}>
        <h1>Atharva Vats Singh</h1>
        <p>AI Automation Engineer | FlyRank Impact Project</p>
      </header>

      <section style={{padding: '20px', textAlign: 'center'}}>
        <h2>About Me</h2>
        <p>I build AI Agents and Automate workflows to save time.</p>
      </section>

      <section style={{padding: '20px', maxWidth: '400px', margin: '40px auto', background: '#f3f4f6', borderRadius: '10px'}}>
        <h2>Settings</h2>
        <form id="settingsForm">
          <label>Email:</label><br/>
          <input type="email" id="email" required style={{width: '100%', padding: '8px', marginTop: '5px'}}/>
          <span id="emailError" style={{color:'red', fontSize: '12px'}}></span><br/><br/>

          <label>Password:</label><br/>
          <input type="password" id="password" required style={{width: '100%', padding: '8px', marginTop: '5px'}}/>
          <span id="passwordError" style={{color:'red', fontSize: '12px'}}></span><br/><br/>

          <button type="submit" style={{background: '#1e3a8a', color: 'white', padding: '10px', width: '100%', border: 'none', cursor: 'pointer'}}>Save Settings</button>
        </form>
      </section>

      <footer style={{background: '#1e3a8a', color: 'white', textAlign: 'center', padding: '15px', marginTop: '40px'}}>
        <p>© 2026 Atharva Vats Singh | FlyRank Impact Project</p>
      </footer>
    </main>
  )
}