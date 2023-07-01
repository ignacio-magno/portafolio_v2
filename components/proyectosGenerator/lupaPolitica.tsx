import {IProyectos} from "@/components/proyectosGenerator/IProyector";

export const LupaPoliticaProyecto: IProyectos = {
    Card: {
        href: "https://lupapolitica.cl",
        tags: ["web scraping", "nextjs", "react", "tailwindcss", "seo", "open source"],
        title: "Lupa Política",
        pathImage: "/lupapolitica-black.png",
        body: <Body/>,
        type: "web service"
    }
}

function Body() {
    return <>
        <p>Lupa política es un proyecto que realiza web scraping de páginas del estado de Chile, recolecta
            los
            datos
            y los guarda en una base de datos pública.</p>
        <p>Cuenta con un backend y un frontend open source, la página cuenta con seo y está abierta a nuevas
            integraciones
            que clientes pida o a mi se me ocurran.</p>
    </>
}