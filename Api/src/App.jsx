import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUser(data))
      .catch((err)=>console.log(err))
  })

  return (
    <div>
      <ol>
        {
          user.map((item,id)=>(
            <li key={id}>{item.name}</li>          
          ))
        }
      </ol>
    </div>
  )
}

export default App