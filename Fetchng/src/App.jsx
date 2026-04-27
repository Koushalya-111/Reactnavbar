import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(data => setuser(data))
      .catch((err) => console.log(err))
  })
  return (
    <>
      <div className='flex items-center justify-center'>

        <table className='w-[50%] border border-gray-200'>
          <thead>
            <tr className='bg-green-600'>
              <th className='p-3 border'>ID</th>
              <th className='p-3 border'>Name</th>
              <th className='p-3 border'>Email</th>
              <th className='p-3 border'>Websites</th>
            </tr>
          </thead>

          <tbody>
              {
                user.map((item,id)=>(
                  <tr key={id} className='bg-gray-200'>
                    <td className='p-3 border'>{item.id}</td>
                    <td className='p-3 border'>{item.name}</td>
                    <td className='p-3 border'>{item.email}</td>
                    <td className='p-3 border'>{item.website}</td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App