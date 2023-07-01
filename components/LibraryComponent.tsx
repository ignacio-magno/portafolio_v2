import CodeRender from "@/components/CodeRender";
import {GithubLink} from "@/components/GithubLink";


export type TLibraryF29Reader = {
    title: string;
    code: string;
    githubHref: string;
    version: string;
    description: JSX.Element;
    caracteristicas: string[];
    id: string;
}

export default function LibraryComponent({elements}: { elements: TLibraryF29Reader[] }) {
    return <>
        <div className={"grid grid-cols-1 divide-y gap-y-20"}>
            {
                elements.map((j: TLibraryF29Reader) => {
                    return <div id={j.id} key={j.title}>
                        <LibraryItem title={j.title} code={j.code} githubHref={j.githubHref} version={j.version}>
                            <>
                                {j.description}
                                <Caracteristicas caracteristicas={j.caracteristicas}/>
                            </>
                        </LibraryItem>
                    </div>
                })
            }
        </div>
    </>
}

function LibraryItem({
                         title,
                         children,
                         code,
                         githubHref,
                         version
                     }: { title: string, children: JSX.Element, code: string, githubHref: string, version: string }) {


    return <div className={""}>
        <br></br>
        <br></br>
        <h3 className={"text-5xl font-bold"}>
            {title}
        </h3>
        <div className={"mx-5 my-4"}>
            <GithubLink href={githubHref} version={version}/>
        </div>

        {children}

        <CodeRender title={"Ejemplo"} language={"language-cs"}>
            {code}
        </CodeRender>


    </div>
}

function Caracteristicas({caracteristicas}: { caracteristicas: string[] }) {
    return <div className={"mx-10 my-5 text-blue-600 font-bold"}>
        <ul className={"list-disc"}>
            {caracteristicas.map((j, index) => <li key={index}>{j}</li>)}
        </ul>
    </div>
}

