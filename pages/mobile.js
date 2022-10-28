import styles from '../styles/Mobile.module.css'
import Image from "next/image"
import { parse } from "express-useragent"
import Head from 'next/head'

export default function Mobile() {
    return(
        <div>
            <Head>
                <title>Futurez | Mobile Incompatability</title>
                <meta name="robots" content="noindex" />
            </Head>
            <div className={styles.warning}>
                <article>
                <div className={styles.title}>
                    <Image src="/assets/generic/futurez_logo.png" alt="Futurez Logo" priority="true" width={60} height={60} />&nbsp;Futurez
                </div>
                <p>
                    We&apos;re sorry, but Futurez is not currently compatible on mobile.
                </p>
                </article>
            </div>
        </div>
    )
}