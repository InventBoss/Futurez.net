import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TitleBar from '../components/TitleBar'

export default function Home() {  
    return (
        <div className={styles.container}>
        <Head>
            <title>Futurez | The Colony Builder on Mars</title>
            <meta name="description" content="Welcome to Futurez! Build the Mars Colony of Your Dreams." />
            <meta name="author" content="InventBoss" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <TitleBar />

        <div className={styles.placeholder}>
            <article>
            <h1 data-nosnippet>Welcome to my upcoming game Futurez!</h1>
            <p>It&apos;s going to take me a little while for me to get this game up, but<br /> in the meanwhile... wait I guess?</p>
            </article>
        </div> 

        </div>
    )
}
