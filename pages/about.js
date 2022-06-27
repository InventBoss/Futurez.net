import Head from 'next/head'
import TitleBar from '../components/TitleBar'
import styles from '../styles/About.module.css'
import Image from "next/image"

export default function About() {
    return (
      <div>
        <Head>
          <title>Futurez</title>
          <meta name="description" content="Welcome to Futurez! Build the Mars Colony of Your Dreams." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <TitleBar />

        <div className={styles.about_background}>
            <article className={styles.about}>
                <h1><span><Image src="/assets/generic/profile_picture.png" alt="InventBoss's Profile Picture" width={100} height={100}></Image></span>&nbsp;About InventBoss</h1>
                <br />
                <p>Hello my name is InventBoss. I am a french junior developer who created Futurez. The project originally started as a school project. Once it was over I continued working on the site. There is no planned release date for the game itself, so look out for when it comes out!</p>
            </article>
        </div>
  
      </div>
    )
  }