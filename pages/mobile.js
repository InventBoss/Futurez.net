import styles from '../styles/Mobile.module.css'
import Image from "next/image"
import { parse } from "express-useragent"

export async function getServerSideProps({ req }) {
    const rawHeaders = req.rawHeaders
    const userAgent = rawHeaders[rawHeaders.indexOf("User-Agent") + 1]
    const isMobile = parse(userAgent).isMobile

    if(!isMobile) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    } 

    return {
        props: {},
    }
}

export default function Mobile() {
    return(
        <div>
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