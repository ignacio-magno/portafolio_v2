import {LupaPoliticaProyecto} from "@/components/proyectosGenerator/lupaPolitica";
import {deserializadorPlanillaPrevired} from "@/components/proyectosGenerator/DeserializadorPlanillaPrevired";

export interface IProyectos {
    Card: {
        href: string
        tags: string[]
        title: string
        pathImage: string
        body: JSX.Element | JSX.Element[]
        type?: string
        friendlyName?: string
    },
    Page?: JSX.Element | JSX.Element[]
}

export const getProyectos = async (): Promise<IProyectos[]> => {
    return [LupaPoliticaProyecto, deserializadorPlanillaPrevired];
}