import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppHeader from '../components/AppHeader'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Let's Learn Linux!</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppHeader />  
      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className='option-cntr'>
          <div className='option-card option-card-1'>
            <p className='option-card-text'>Begin</p>
          </div>
          {/* <div className='option-card option-card-2'>
            <p className='option-card-text'>Quiz Mode</p>
          </div> */}

        </div>


      </main>
    </div>
  )
}

export default Home
