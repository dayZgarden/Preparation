import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Home() {
    let navigate=useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('');

  async function getUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    setLoading(false);
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div className="container">
      <div className="row">
        <div className="user-list">
          {users.map((user) => 
          (
          <div className="user" key={user.id}>
            <div className="user-card" onClick={() => navigate(`/${user.id}`)}>
              <div className="user-card__container">
                <h3>{user.name}</h3>
                <p>
                  <b>Email:</b> {user.email}
                </p>
                <p>
                  <b>Phone:</b> {user.phone}
                </p>
                <p>
                  <b>Website:</b>
                  {user.website}
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
