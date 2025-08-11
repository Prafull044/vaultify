import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Manager from './components/Manager';
import Footer from './components/Footer';
import Login from './components/Login'; // New login component

function App() {
  const [user, setUser] = useState(false); // Track login state

  return (
    <>
      <Navbar />
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>

      <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

        {/* If user is logged in, show Manager, else Login */}
        {user ? (
          <>
            <Manager />
            <Footer />
          </>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </>
  );
}

export default App;
