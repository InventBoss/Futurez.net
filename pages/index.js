import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TitleBar from '../components/TitleBar'
import { parse } from "express-useragent"

export async function getServerSideProps({ req }) {
    const rawHeaders = req.rawHeaders
    const userAgent = rawHeaders[rawHeaders.indexOf("User-Agent") + 1]
    const isMobile = parse(userAgent).isMobile

    if(isMobile) {
        return {
            redirect: {
                destination: "/mobile",
                permanent: false,
            },
        }
    } 

    return {
        props: {},
    }
}

export default function Home() {    
    return (
        <div className={styles.container}>
        <Head>
            <title>Futurez</title>
            <meta name="description" content="Welcome to Futurez! Build the Mars Colony of Your Dreams." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <TitleBar />

        <div className={styles.placeholder}>
            <article>
            <h1>Welcome to my upcoming game Futurez!</h1>
            <p>It&apos;s going to take me a little while for me to get this game up, but<br /> in the meanwhile... wait I guess?</p>
            </article>
        </div> 

        </div>
    )
}
