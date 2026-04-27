import React, { useState } from 'react'

const App = () => {

  const [search,setSearch]=useState("")
  const users=[
    {
      id:1,
      name:"Sneha"
    },
    {
      id:2,
      name:"Ganesh"
    },
    {
      id:3,
      name:"Priyanka"
    },
    {
      id:4,
      name:"Aishwarya"
    },
    {
      id:5,
      name:"Koushalya"
    },
    {
      id:6,
      name:"Priti"
    },
    {
      id:7,
      name:"Rani"
    },
    {
      id:8,
      name:"Sumitra"
    },
    {
      id:9,
      name:"Yashashini"
    },
    {
      id:10,
      name:"Saman"
    },
    {
      id:11,
      name:"Sana"
    },
    {
      id:12,
      name:"Nabi",
    },
    {
      id:13,
      name:"Afraz"
    },
    {
      id:14,
      name:"Wasim Sir"
    },
    {
      id:15,
      name:"Shashikant"
    },
    {
      id:15,
      name:"Pinku"
    },
    {
      id:15,
      name:"Prema"
    },
    {
      id:15,
      name:"Prabha"
    }
  ]

  const filteredData=users.filter((data)=>(data.name.toLocaleLowerCase()).includes(search.toLocaleLowerCase()))

  return (
    <>
    <h2>Search Bar</h2>
    <input type="text" placeholder='Type to search' onChange={((e)=>setSearch(e.target.value))} />
    <ul>
      <li>
        {
          filteredData.map((item,id)=>(
            <li key={id}>{item.name}</li>
         )) 
        }
      </li>
    </ul>
    </>
  )
}

export default App