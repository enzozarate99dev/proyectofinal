import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import ActionAreaCard from '../components/Card'

export default function Home() {
  const [animeList, setAnimeList] = useState()

  const getAnime = async () => {
    const response = await axios.get('https://api.jikan.moe/v4/anime')

    setAnimeList(response.data)
    console.log(response.data)
    
  }

  useEffect(() => {
    getAnime()
  }, [])
  return (
    <div>
      

      <div >
        { animeList?.map((animes) => (
          <Card
            key={animes.mal_id}
            id={animes.mal_id}
            titulo={animes.titles.title}
            image={animes.images.jpg.image_url}
          ></Card>
        ))}
      </div>    
    </div>
      )
}
