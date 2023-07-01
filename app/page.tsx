import Image from 'next/image'

import Pericles from "@/public/pericles.jpg"

import styles from './styles.module.css'
import Link from "next/link";
import {SVGProps} from "react";

export const metadata = {
    title: "Ignacio L. Paycho, Desarrollador de software profesional | Ignacio lp",
    description: "Ignacio L. Paycho, Desarrollador de software profesional de software para backend y frontend," +
        " abiertos a las nuevas tecnologícas como el machine learning y la robótica."
}

export default function Home() {
    return (
        <main className="">
            <div className={"flex flex-col gap-y-5 m-auto"}>
                <div className={"flex gap-x-5 items-center"}>
                    <div className={styles.imagen}>
                        <Image src={Pericles} alt={"pericles logo"} height={150}/>
                    </div>
                    <h1 className="text-4xl font-bold ">Ignacio L. Paycho</h1>
                </div>
                <div className={"flex gap-x-4"}>
                    <Link href={"https://github.com/ignacio-magno"} rel={"nofollow"}>
                        <CarbonLogoGithub fontSize={25}/>
                    </Link>
                    <Link href={"https://www.instagram.com/"} rel={"nofollow"}>
                        <CarbonLogoInstagram fontSize={25}/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/ignacio-l-paycho-767885140/"} rel={"nofollow"}>
                        <CarbonLogoLinkedin fontSize={25}/>
                    </Link>
                    <Link href={"https://www.youtube.com/channel/UCbrN_ryT5ubp9InpLdcnDNw"} rel={"nofollow"}>
                        <CarbonLogoYoutube fontSize={25}/>
                    </Link>
                    <Link href={"mailto:lasterriens@gmail.com"} rel={"nofollow"} type={"email"}>
                        <CarbonEmail fontSize={25}/>
                    </Link>
                </div>

                <p>Hola, me llamo ignacio y soy un desarrollador de software de Iquique, Chile. &#127796;</p>
                <p>Me centro en el desarrollo backend y lógica de programación con buenas prácticas de código,
                    sigo las buenas prácticas del testing para un desarrollo optimo y escalable. </p>

                <p>Mis proyecciones para continuar aprendiendo son el Machine Learning y también me interesa la robótica
                    que espero compartir
                    tutoriales , combinado la robótica con el deep learning pueden resultar cosas muy interesantes y
                    entretenidas.</p>

                <p>Un poco de mi, leo historia antigua y siempre vuelvo a los mismos libros tales como los
                    de Homero, Plutarco y Tucídides.
                </p>
            </div>
        </main>
    )
}


function CarbonLogoGithub(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
            <path fill="currentColor" fillRule="evenodd"
                  d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"></path>
        </svg>
    )
}


function CarbonLogoInstagram(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
            <circle cx="22.406" cy="9.594" r="1.44" fill="currentColor"></circle>
            <path fill="currentColor"
                  d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.162 6.162 0 0 0 16 9.838ZM16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"></path>
            <path fill="currentColor"
                  d="M16 6.162c3.204 0 3.584.012 4.849.07a6.642 6.642 0 0 1 2.228.413a3.975 3.975 0 0 1 2.278 2.278a6.642 6.642 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.642 6.642 0 0 1-.413 2.228a3.975 3.975 0 0 1-2.278 2.278a6.642 6.642 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.642 6.642 0 0 1-2.228-.413a3.975 3.975 0 0 1-2.278-2.278a6.642 6.642 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.642 6.642 0 0 1 .413-2.228a3.975 3.975 0 0 1 2.278-2.278a6.642 6.642 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.807 8.807 0 0 0-2.912.558a6.136 6.136 0 0 0-3.51 3.51a8.807 8.807 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.807 8.807 0 0 0 .558 2.912a6.136 6.136 0 0 0 3.51 3.51a8.807 8.807 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.807 8.807 0 0 0 2.913-.558a6.136 6.136 0 0 0 3.51-3.51a8.807 8.807 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.807 8.807 0 0 0-.558-2.912a6.136 6.136 0 0 0-3.51-3.51a8.807 8.807 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4Z"></path>
        </svg>
    )
}


function CarbonLogoLinkedin(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
            <path fill="currentColor"
                  d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"></path>
        </svg>
    )
}


function CarbonLogoYoutube(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
            <path fill="currentColor"
                  d="M29.41 9.26a3.5 3.5 0 0 0-2.47-2.47C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.94.59a3.5 3.5 0 0 0-2.47 2.47A36.13 36.13 0 0 0 2 16a36.13 36.13 0 0 0 .59 6.74a3.5 3.5 0 0 0 2.47 2.47c2.18.59 10.94.59 10.94.59s8.76 0 10.94-.59a3.5 3.5 0 0 0 2.47-2.47A36.13 36.13 0 0 0 30 16a36.13 36.13 0 0 0-.59-6.74ZM13.2 20.2v-8.4l7.27 4.2Z"></path>
        </svg>
    )
}

function CarbonEmail(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
            <path fill="currentColor"
                  d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"></path>
        </svg>
    )
}