import Link from "next/link";
import {GithubLink} from "@/components/GithubLink";

export type TProject = {
    lenguaje?: string,
    tipo: string,
    name: string,
    children: any
    version: string
    openSource?: boolean
    href: string
    repositoryUrl?: string
}

export default function ProjectBox({
                                       lenguaje,
                                       tipo,
                                       name,
                                       children,
                                       version,
                                       openSource,
                                       href,
                                       repositoryUrl
                                   }: TProject) {
    return <>
        <div className={"bg-slate-700 py-10 px-12 rounded-md my-2 text-sm text-white"}>
            <Link href={href}>
                <div className={"mb-3"}>
                    <span>{tipo}</span> {lenguaje && <> / <span>{lenguaje}</span> </>}
                </div>

                <p className={"flex gap-x-3 mb-3 text-xl font-bold"}>{name}</p>
                {children}
            </Link>

            {openSource ? <div className={"flex gap-x-3 mt-3 justify-end mt-5"}>
                <span>Open source</span>
                {repositoryUrl && <GithubLink href={repositoryUrl} version={version}/>}
            </div> : <></>}

        </div>
    </>
}

