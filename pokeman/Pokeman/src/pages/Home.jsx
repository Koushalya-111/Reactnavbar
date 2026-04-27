import React, { useEffect, useState } from 'react'
import { BiSolidErrorAlt } from "react-icons/bi";

const Home = () => {


    const [user, setuser] = useState([]);
    const [search, setSearch] = useState("");

    const [error, setError] = useState("")



    let filteredData = user.filter((data) => (data.name.toLocaleLowerCase()).includes(search.toLocaleLowerCase()))


    useEffect(() => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
            .then(response => response.json())
            .then(data => setuser(data.results))
            .catch((err) => console.log(err))

    }, [])

    useEffect(() => {
        if (search === "") {
            return;
        }
        if (filteredData.length === 0) {
            setError(true)
        }
        else {
            setError(false)
        }
    })
    return (
        <>
            <div className='w-full lg:px-28 px-10 py-8'>
                <div className='lg:flex justify-end w-full'>
                    <input type="text" placeholder='Enter pokemon name ' className='border px-2 w-[100%] lg:w-[28%] mb-5 h-[2.5rem] rounded-xl' onChange={((e) => setSearch(e.target.value))} />
                </div>
                <h1 className='text-center font-bold text-3xl mb-6'>POKEMON WEBSITE</h1>

                <p style={{ color: "red", textAlign: "center" }}>{error ? "Oops! User not found" : ""}</p>

                <ul className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 gap-4'>
                    {
                        filteredData.map((item, id) => {
                            return (
                                <>
                                    <li key={id}>
                                        <div className='card shadow-lg hover:bg-gray-50 flex items-center justify-center'>
                                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id + 1}.png`} alt="" className='card-img' />
                                        </div>
                                        <h3 className='text-center text-2xl text-red-600 font-bold uppercase'>{item.name}</h3>
                                    </li>
                                </>
                            )

                        })
                    }
                </ul>

            </div>
        </>
    )
}

export default Home