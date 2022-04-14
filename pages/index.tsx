import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import FlashCard from '../components/FlashCard'

const Home: NextPage = () => {
  return (
    <div className="main-container">
      <Head>
        <title> Let's Learn Linux! </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppHeader />  
      <main className="content-container">
        
        <h1 className={styles.title}>
          Let's Learn <a href="" target="_blank"> Linux! </a>
        </h1>
        <FlashCard />

      </main>
      <AppFooter />
    </div>
  )
}

export default Home
