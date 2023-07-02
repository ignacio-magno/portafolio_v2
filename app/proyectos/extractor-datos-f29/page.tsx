import Image from "next/image";
import ImportantWord from "@/components/importantWord";
import Link from "next/link";
import {CarbonLogoGithub} from "@/components/logos";
import {Metadata} from "next";
import {headers} from "next/headers";
import Shared from "@/components/Shared";

export const metadata: Metadata = {
    title: "Extractor de datos de F29. Obten en segundos  datos relevantes como " +
        " Ppm, credito, débito, impuesto determinado, etc. | Ignacio LP",
    description: "Deserializa y extrae datos de los F29 pagados fácil y rápido, extrayendo datos importantes para tu negocio  como son los " +
        "valos de creditos y debitos, el folio del f29 y periodo tributario, etc",

    twitter: {
        card: "summary_large_image",
        site: "@ignaciolp_",
        title: "Extractor de datos de F29. Obten en segundos  datos relevantes como " +
            " Ppm, credito, débito, impuesto determinado, etc. | Ignacio LP",
        description: "Deserializa y extrae datos de los F29 pagados fácil y rápido, extrayendo datos importantes para tu negocio  como son los " +
            "valos de creditos y debitos, el folio del f29 y periodo tributario, etc",
        images: "/f29.png"
    }
}

export default function Page() {
    const urlPage = headers().get("host") + "/proyectos/extractor-datos-f29";
    return <>
        <Image src={"/f29-linkedin.png"} alt={"f29 logo"} width={200} height={200} hidden/>
        <div className={"flex gap-x-4 ml-3 items-center"}>
            <Image src={"/f29.png"} alt={"f29 logo"} width={50} height={50}/>
            <h1 className={"text-xl font-medium"}>Extractor de datos de F29.</h1>
        </div>
        <Shared href={urlPage}/>
        <br/>
        <div className={"flex flex-col gap-y-4"}>
            <p>
                Deserializa archivos F29 facilmente con <ImportantWord>software</ImportantWord>, todo automatizado en
                segundos.
            </p>
            <p>
                El proyecto está desarrollado con <ImportantWord>C#, dotnet</ImportantWord>, funciona por comando por
                ahora.
            </p>
            <ImportantWord>¿Y si le enseñamos a una ia a leer F29?</ImportantWord>
        </div>

        <Link href={"https://github.com/ignacio-magno/f29-deserialize"} className={""} target={"_blank"}
              rel={"nofollow"}>
            <div
                className={"px-5 py-2 bg-green-700 text-white rounded-lg flex gap-x-5 justify-center pt-4 text-md mt-5"}>
                <CarbonLogoGithub fontSize={25}/> Ir Al código
            </div>
        </Link>
    </>
}