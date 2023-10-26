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
        <h1 className={"text-2xl font-medium"}>Proyectos Open Source y Apis.</h1>
        <br/>
        <br/>
        <div className={"flex flex-col gap-y-4"}>
            <p>
                En esta sección se encuentran todos los proyectos que he desarrollado y que pueden ser de utilidad para
                las personas.
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
        <div className={"bg-white px-5 md:px-14 py-7 text-black"}>
            <div className={"flex flex-col md:flex-row justify-between items-center"}>
                <div className={"flex flex-col md:flex-row gap-x-2 items-center"}>
                    <div className={"relative h-28 w-28 mb-4 md:h-14 md:w-14 md:mb-0"}>
                        <Image src={pathImage} alt={"lupa politica logo"} fill/>
                    </div>

                    <h2 className={"text-2xl font-medium"}>{title}</h2>
                </div>

                <p className={"text-xs"}>{type}</p>
            </div>
            <br/>
            <div className={"flex flex-col gap-y-2"}>
                {body}
            </div>
            <br/>
            <div className={"flex flex-wrap gap-x-2 text-white gap-y-2"}>
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