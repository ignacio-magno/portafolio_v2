import Image from "next/image";
import Link from "next/link";

interface IProyectos {
    href: string
    tags: string[]
}

export default function Page() {
    const def = [
        {
            href: "https://lupapolitica.cl",
            tags: ["web scraping", "nextjs", "react", "tailwindcss", "seo", "open source"]
        }
    ]

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

        {
            def.map(j => <Item {...j} key={j.href}/>)
        }
    </>
}

function Item({href, tags}: IProyectos) {
    return <Link href={href} rel={"nofollow"}>
        <div className={"bg-white px-14 py-7 text-black"}>
            <div className={"flex gap-x-2 items-center"}>
                <Image src={"/lupapolitica-black.png"} alt={"lupa politica logo"} width={50} height={50}/>
                <h2 className={"text-xl font-medium"}>Lupa política</h2>
            </div>
            <br/>
            <div className={"flex flex-col gap-y-2"}>
                <p>Lupa política es un proyecto que realiza web scraping de páginas del estado de Chile, recolecta
                    los
                    datos
                    y los guarda en una base de datos pública.</p>
                <p>Cuenta con un backend y un frontend open source, la página cuenta con seo y está abierta a nuevas
                    integraciones
                    que clientes pida o a mi se me ocurran.</p>
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
    return <div className={"bg-cyan-600 px-3 rounded"}>{item}</div>
}