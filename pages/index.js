import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import ActionAreaCard from '../components/Card'

export default function Home() {
  const [animeList, setAnimeList] = useState([])

  const getAnime = async () => {
    const response = await axios.get('https://api.jikan.moe/v4/anime')

    setAnimeList(response.data)
  }

  useEffect(() => {
    getAnime()
  }, [])
  return (
    <div>
      

      <div >
        {animeList?.map((anime) => (
          <Card
            key={anime.id}
            id={anime.id}
            titulo={anime.titles.title}
            image={anime.images.jpg.image_url}
          ></Card>
        ))}
      </div>    
    </div>
      )
}
