import React, { useEffect, useState } from 'react';
import './profile.css';
import Loader from './loader';

export default function Profile({ state }) {
  const [search, setSearchTerm] = useState('');
  console.log(search);
  console.log(state);
  const [user, setUser] = useState(null);
  var x = state;

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch('https://reqres.in/api/users?page=' + x);
      const data = await response.json();
      setUser(data.data);
      console.log(x);

    }, 500)
  }, [x])

  return (
    <>
    <div className="search">
      <input type="text" placeholder="search" onChange={val=>{setSearchTerm(val.target.value)}} ></input>
    </div>
      <div className="cards">

        {
          user && user.filter((el)=>{
            if(search=== "")
            {
              return el;
            }else if(el.first_name.toLowerCase().includes(search.toLocaleLowerCase())){
              return el;
            }
          }).map((el) => {
            return (

              <div className="card" key={el.id}>
                <div className="avatar a1">
                  <img src={el.avatar} alt="img" />
               </div>
                <div className="text-name"> {el.first_name} {el.last_name}</div>
                <div className="mid">{el.email}</div>
              </div>

            )
          })
        }
        {!user && [1, 2, 3, 4, 5, 6].map((n) => <Loader key={n} />)}
      </div>
    </>
  );

}