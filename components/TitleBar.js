import Image from "next/image"
import Link from "next/link"

function TitleBar() {
    return(
        <div className="title_bar">

        <div className="title_backdrop" />

        <div className="title">
            <Link href="/" passHref prefetch={false}>
            <div>
                <Image src="/assets/generic/futurez_logo.png" alt="Link to Futurez.net Homepage" width={65} height={65} />Futurez
            </div>
            </Link>
        </div>

        <div className="socials">
            <div className="logo" width={50} height={50}>
                <Link href="/about" passHref className="logo" width={50} height={50}>
                <Image src="/socials/about.svg" alt="InventBoss's About Page" width={50} height={50}/>
                </Link>
            </div>

            <a href="https://twitter.com/Invent_Boss" rel="noreferrer" target="_blank" className="logo" width={50} height={50}>
            <Image src="/socials/twitter.svg" alt="InventBoss's Twitter Link" width={50} height={50} />
            </a>

            <a href="https://github.com/InventBoss/Futurez.net" rel="noreferrer" target="_blank" className="logo" width={50} height={50}>
            <Image src="/socials/github.svg" alt="Project Github Link" width={50} height={50} />
            </a>
            
            <a href="https://open.spotify.com/user/hflep1j8uf9thrrr7aa3m9g1v?si=40a32fb6786d402e" rel="noreferrer" target="_blank" className="logo" width={50} height={50}>
            <Image src="/socials/spotify.svg" alt="InventBoss's Spotify Link" width={50} height={50} />
            </a>
        </div>

        <style jsx>{`
            .title_bar {
                display: flex;
                justify-content: space-between;
            }
            
            .title_backdrop {
                backdrop-filter: blur(1px); 
                -webkit-backdrop-filter: blur(1px); 
                background-color: rgba(189, 69, 0, 0.504);
                border-bottom-right-radius: 10px;
                border-bottom-left-radius: 10px;
            
                width: 100vw;
                height: 5.5em;
                position: absolute;
            }
            
            .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 1.5em;
                width: 11em;
                backdrop-filter: saturate(100%);
                font-size: 1.5em;
                color: #c64803;
                -webkit-text-stroke: 2px #8e1919;
                margin: 0.5em;
            }
            
            .title:hover {
                cursor: pointer;
                color: #e25b26;
            }
            
            .title div {
                display: flex;
                justify-content: space-evenly;
                width: 13em;
                align-items: center;
            }
            
            .socials {
                display: flex;
                padding: 1em;
                padding-right: 1.5em;
                justify-content: space-between;
                width: 15em;
                height: 3.5em;
                right: 0;
            }
            
            .logo {
                cursor: pointer;
                filter: invert(27%) sepia(23%) saturate(7479%) hue-rotate(17deg) brightness(98%) contrast(98%);
            }
            
            .logo:hover {
                cursor: pointer;
                filter: invert(43%) sepia(63%) saturate(3476%) hue-rotate(351deg) brightness(96%) contrast(84%);
                transform: scale(1.2)
            }
        `}</style>

        </div> 
    )
}

export default TitleBar