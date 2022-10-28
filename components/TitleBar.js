import Image from "next/image"
import Link from "next/link"

function TitleBar() {
    return(
        <div className="title_bar">

        <div className="title_backdrop" />

        <div className="title">
            <Link href="/" passHref prefetch={false}>
            <div>
                <Image src="/assets/generic/futurez_logo.png" alt="Link to Futurez.net Homepage" width={60} height={60} />Futurez
            </div>
            </Link>
        </div>

        <div className="socials">
            <div className="logo" width={50} height={50}>
                <Link href="/about" passHref className="logo" width={50} height={50}>
                <Image src="/assets/socials/about.svg" alt="InventBoss's About Page" width={50} height={50}/>
                </Link>
            </div>

            <a href="https://twitter.com/Invent_Boss" rel="noreferrer" target="_blank" className="logo" width={50} height={50}>
            <Image src="/assets/socials/twitter.svg" alt="InventBoss's Twitter Link" width={50} height={50} />
            </a>

            <a href="https://github.com/InventBoss/Futurez.net" rel="noreferrer" target="_blank" className="logo" width={50} height={50}>
            <Image src="/assets/socials/github.svg" alt="Project Github Link" width={50} height={50} />
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
                width: 11em;
                backdrop-filter: saturate(100%);
                font-size: 25px;
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
                align-items: center;
                width: 12em;
                height: 3.5em;
                right: 0;
            }
            
            .logo {
                cursor: pointer;
                filter: brightness(0) saturate(100%) invert(8%) sepia(90%) saturate(5900%) hue-rotate(358deg) brightness(100%) contrast(83%);
            }
            
            .logo:hover {
                cursor: pointer;
                filter: brightness(0) saturate(100%) invert(27%) sepia(105%) saturate(1431%) hue-rotate(2deg) brightness(98%) contrast(98%);
                transform: scale(1.2);
            }
        `}</style>

        </div> 
    )
}

export default TitleBar