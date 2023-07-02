import {IProyectos} from "@/components/proyectosGenerator/IProyector";
import ImportantWord from "@/components/importantWord";
import {CarbonLogoGithub} from "@/components/logos";
import Link from "next/link";
import Image from "next/image";

export const F29Deserialize: IProyectos = {
    Card: {
        href: "/proyectos/extractor-datos-f29",
        tags: ["deserializador", "f29", "api", "contabilidad", "sii"],
        title: "Extractor de datos de F29.",
        pathImage: "/f29.png",
        body: <Body/>,
        type: "Console",
        friendlyName: "extractor-datos-f29"
    },
    Page: <Page/>,
    Seo: {
        title: "Extractor de datos de F29. | Ignacio LP",
        description: "Deserializa y extrae datos de los F29 pagados, extrayendo datos como los creditos y debitos, el folio del f29 y periodo tributario.",
    }
}

function Body() {
    return <p>Lee los archivos F29 y retorna una clase con los datos obtenidos con fácil acceso a el usuario.</p>
}

function Page() {
    return <>
        <div className={"flex gap-x-4 ml-3 items-center"}>
            <Image src={"/f29.png"} alt={"f29 logo"} width={50} height={50}/>
            <h1 className={"text-xl font-medium"}>Extractor de datos de F29.</h1>
        </div>
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
