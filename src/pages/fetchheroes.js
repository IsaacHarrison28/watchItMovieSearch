// import { useQuery } from '@tanstack/react-query'
import {useEffect, useState} from 'react'
import axios from 'axios'
import './styles/fetchResponse.css'

export const Superheroes = () => {

    const [data, setdata] = useState({})
    const [loading, setloading] = useState(true)

   useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: 'santan dave'},
            headers: {
            'X-RapidAPI-Key': 'b932b44309msh2d6c79484e8d040p131feajsn4708171cdf2b',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };
        
        axios.request(options).then((response) => {
            setdata(response.data.d) 
            setloading(false)
        }).catch((error) => console.error(error));
   }, [])

   if(loading){
    return <h1>Loading.....</h1>
   }

   console.log(data)

    return(
        <div className='response-container'>
            <div id='responses'>
                {
                    data !== undefined && data.map((item) => {
                        return (
                            <div key={item.id} id="response-card">
                                <div id='image-container'>
                                    {item.i ? <img src={item.i.imageUrl} alt ="" /> : <img src={require('./images/no-photo.png')} alt=""/> }
                                </div>
                                <p id='video-name'>{item.l}</p>
                                <div id='description'>
                                    <p id='year-of-production'>{item.y}</p>
                                    { item.qid && <p>{item.qid}</p> }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}