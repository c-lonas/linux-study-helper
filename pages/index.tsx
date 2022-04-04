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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader/>  

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>
    </div>
  )
}

export default Home
