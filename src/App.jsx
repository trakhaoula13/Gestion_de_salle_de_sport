import { useState } from 'react'
import './App.css'
import Home from "./pages/Home";
import Members from "./pages/Members";
import About from "./pages/About";
import AddMember from "./pages/AddMember";
import NavBar from "./components/Navbar";
import memberData from "./data/members";
import { Routes, Route } from "react-router-dom";

function App() {
  const [members, setMembers] = useState(memberData);

  // fct permet d'ajouter un nv abonnes
  const addMember = (member) => {
    setMembers([...members, member]);
  };

  return (
    <>
      <NavBar />
      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/members' element={<Members members={members} setMembers={setMembers} />} />
          <Route path='/add' element={<AddMember addMember={addMember} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
