import {getProyectos} from "@/components/proyectosGenerator/IProyector";

export async function generateStaticParams() {
    const blogs = await getProyectos()
    return blogs.map(item => ({params: {nameProyecto: item.Card.friendlyName}}))
}

export default async function Page({params: {nameProyecto}}: { params: { nameProyecto: string } }) {
    const proyecto = await getProyectos().then(j => j.find(k => k.Card.friendlyName === nameProyecto))
    return <main>
        <div className={"flex flex-col gap-y-4"}>
            {proyecto?.Page}
        </div>
    </main>
}