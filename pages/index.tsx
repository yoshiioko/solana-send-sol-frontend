import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AppBar } from '../components/AppBar'
import { SendSolForm } from '../components/SendSolForm'
import Head from 'next/head'

const Home: NextPage = (props) => {

  return (
    <div className={styles.App}>
      <Head>
        <title>SOL sender</title>
        <meta
          name="description"
          content="SOL sender"
        />
      </Head>
      <AppBar />
      <div className={styles.AppBody}>
        <p>Display Balance Here</p>
        <SendSolForm />
      </div>
    </div>
  );
}

export default Home;