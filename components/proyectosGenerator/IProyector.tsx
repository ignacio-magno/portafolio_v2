import {LupaPoliticaProyecto} from "@/components/proyectosGenerator/lupaPolitica";
import {deserializadorPlanillaPrevired} from "@/components/proyectosGenerator/DeserializadorPlanillaPrevired";
import {SiiApi} from "@/components/proyectosGenerator/SiiApi";

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
    Page?: JSX.Element | JSX.Element[],
    Seo?: {
        title: string
        description: string
    }
}

export const getProyectos = async (): Promise<IProyectos[]> => {
    return [LupaPoliticaProyecto, deserializadorPlanillaPrevired, SiiApi];
}