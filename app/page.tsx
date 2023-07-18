import Image from 'next/image'

import Pericles from "@/public/pericles.jpg"

import styles from './styles.module.css'
import Link from "next/link";
import {
    CarbonLogoGithub,
    CarbonLogoInstagram,
    CarbonLogoLinkedin,
    CarbonLogoYoutube,
    CarbonEmail
} from "@/components/logos";

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
                <div className={"flex gap-x-4 w-full md:w-max"}>
                    <Link href={"https://github.com/ignacio-magno"} rel={"nofollow"} className={"m-auto"}>
                        <CarbonLogoGithub className={"text-[50px] md:text-[26px]"}/>
                    </Link>
                    <Link href={"https://www.instagram.com/nacho_magnus"} rel={"nofollow"} className={"m-auto"}>
                        <CarbonLogoInstagram  className={"text-[50px] md:text-[26px]"}/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/ignacio-l-paycho-767885140"} rel={"nofollow"}
                          className={"m-auto"}>
                        <CarbonLogoLinkedin  className={"text-[50px] md:text-[26px]"}/>
                    </Link>
                    <Link href={"https://www.youtube.com/channel/UCbrN_ryT5ubp9InpLdcnDNw"} rel={"nofollow"}
                          className={"m-auto"}>
                        <CarbonLogoYoutube className={"text-[50px] md:text-[26px]"}/>
                    </Link>
                    <Link href={"mailto:lasterriens@gmail.com"} rel={"nofollow"} type={"email"} className={"m-auto"}>
                        <CarbonEmail className={"text-[50px] md:text-[26px]"}/>
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


