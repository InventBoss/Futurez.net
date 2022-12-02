import TitleBar from '../components/TitleBar'
import Head from 'next/head'
import styles from '../styles/Error.module.css'

export default function _404() {
    return (
        <div className={styles.container}>
        <Head>
            <title>Futurez | 404 Error</title>
            <meta name="description" content="Welcome to Futurez! Build the Mars Colony of Your Dreams." />
            <meta name="author" content="InventBoss" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="noindex" />
        </Head>

        <TitleBar />

        <article className={styles.message}>
            <h1 data-nosnippet>404 | Well that sucks buddy :/</h1>
        </article>

        </div>
    )
}
