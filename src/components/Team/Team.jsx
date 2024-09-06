
import { useState } from "react";
import "./Team.css";
import { devs } from "../../faker/data";
const Team = () => {
  const [team, setTeam] = useState([]);
  const [name, setName]  = useState("");
  const [desi, setDesi]  = useState("");
  const [photo, setPhoto]  = useState("");

  const handleNameChange = (e) =>{
      setName(e.target.value);
  }
  const handleDesiChange = (e) =>{
      setDesi(e.target.value);
  }
  const handlePhotoChange = (e) =>{
    setPhoto(e.target.value);
  }
  const handleTeamAdd = () =>{
    if(name !== "" || desi !== "" || photo !== ""){
      setTeam((prevState)=>{
        return [{name, desi, photo},...prevState];
      });
    }else{
      alert("All fields are required.");
    }
    setName("");
    setDesi("");
    setPhoto("");
  }

  return (
    <>
      <h1>Team Section</h1>
      <br />
      <input type="text" placeholder="name" value={name} onChange={handleNameChange} />
      <input type="text" placeholder="designation" value={desi} onChange={handleDesiChange} />
      <input type="text" placeholder="photo" value={photo} onChange={handlePhotoChange} />
      <button onClick={handleTeamAdd}>Add</button>

      <br/>
      <div className="team_section">
        {team.map((item, index)=>{
          return (
            <div key={index} className="team_item">
              <img src={item.photo} alt="" />
              <h2>{item.name}</h2>
              <p>{item.desi}</p>
            </div>
          );
        
        })}

      </div>
    </>
  );
}

export default Team