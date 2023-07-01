import Image from "next/image";
import Link from "next/link";
import {getProyectos, IProyectos} from "@/components/proyectosGenerator/IProyector";

export const metadata = {
    title: "Proyectos Open Source y Apis, desarrollo de software para contabildad, web Scraping, servidores web y despliegue en la nube. | Ignacio LP",
    description: "Multiples proyectos desarrollados compartidos, promoviendo el open source y los servicios a traves de api, " +
        "estos proyectos van desde lógica de empresa hasta web scrapping y machine learning, todo con el fin de aprender y compartir.",
}

export default async function Page() {

    const def = await getProyectos()

    return <>
        <h1 className={"text-xl font-medium"}>Proyectos Open Source y Apis.</h1>
        <br/>
        <br/>
        <div className={"flex flex-col gap-y-4"}>
            <p>
                Me gusta hacer proyectos, es como imitar a un compositor componiendo su música
                con un papel, un motivo musical y muchas dudas sobre como conectar correctamente los motivos y que tan
                perjudicial puede ser una simple nota para cambiar toda la estructura de la obra.
            </p>
            <p>
                El código es parecido a esto, un código que soluciona un problema si lo desarrollas 10 veces siempre
                será un código diferente, un archivo más, un archivo menos, una capa menos, etc.
            </p>
            <p>
                Dicha esta filosofía los invito a ver mis proyectos, espero de aquí a 10 años volver a mi primer
                proyecto y
                construirlo nuevamente, así sacaré conclusiones o quizás sorprenderme que el yo de antes era menos malo.
            </p>
            <br/>
        </div>

        <div className={"flex flex-col gap-y-5"}>
            {
                def.map(j => <Item {...j.Card} key={j.Card.href}/>)
            }
        </div>
    </>
}

function Item({href, tags, title, pathImage, body, type}: IProyectos["Card"]) {
    return <Link href={href} rel={"nofollow"}>
        <div className={"bg-white px-14 py-7 text-black"}>
            <div className={"flex justify-between items-center"}>
                <div className={"flex gap-x-2 items-center"}>
                    <Image src={pathImage} alt={"lupa politica logo"} width={50} height={50}/>
                    <h2 className={"text-xl font-medium"}>{title}</h2>
                </div>
                <p className={"text-xs"}>{type}</p>
            </div>
            <br/>
            <div className={"flex flex-col gap-y-2"}>
                {body}
            </div>
            <br/>
            <div className={"flex gap-x-2 text-white"}>
                {
                    tags.map(tag => <Tag item={tag} key={tag}/>)
                }
            </div>
        </div>
    </Link>
}

function Tag({item}: { item: string }) {
    return <div className={"bg-orange-600 px-3 rounded"}>{item}</div>
}