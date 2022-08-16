import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const TrainMap = dynamic(() => import('../components/TrainMap'), { ssr: false })

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {(typeof window !== 'undefined') && <TrainMap />}
      </main>
    </div>
  )
}

export default Home
