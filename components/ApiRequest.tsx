import React from "react";
import WithSpace from "@/components/WithSpace";
import CodeRender from "@/components/CodeRender";

export type TApiRequest = {
    subtitle: string
    description: string[]
    endpoint: string
    parameters: string[]
    headers: string[]
    body: string
    response: string
    hrefSection: string
}

export default function ApiRequest({
                                       subtitle,
                                       description,
                                       endpoint,
                                       parameters,
                                       headers,
                                       body,
                                       response, hrefSection
                                   }: TApiRequest) {

    return <>
        <div id={hrefSection}>
            <h4 className={"text-xl font-bold mb-4 "}>{subtitle}</h4>
            <div className={"grid grid-cols-1 gap-y-8"}>
                <div>
                    {description.map((j, index) => {
                        return <WithSpace key={index} elements={[j]}/>
                    })}
                </div>

                <code className={"bg-gray-200 px-2 py-2 rounded-sm"}>{endpoint}</code>

                <TableParameters parameters={parameters}/>
                <TableHeaders headers={headers}/>

                <CodeRender title={"Body"} language={"language-json"}>
                    {body}
                </CodeRender>

                <CodeRender title={"Response"} language={"language-json"}>
                    {response}
                </CodeRender>
            </div>
        </div>
    </>
}

function TableHeaders(props: { headers: string[] }) {
    const classNameTable = "px-4 py-2";
    return <div>
        <p className={"text-blue-500 uppercase font-bold "}>Headers</p>
        <table className={""}>
            <thead className={"border-b w-full text-left text-sm "}>
            <tr>
                <th className={classNameTable}>Campo</th>
                <th className={classNameTable}>Descripción</th>
            </tr>
            </thead>
            <tbody>
            {
                props.headers.length === 0 && <tr>
                    <td colSpan={3} className={"text-center"}>Sin Headers</td>
                </tr>
            }

            {
                props.headers.map((j, index) => {
                    return <tr key={index}>
                        <td className={classNameTable}>
                            {j}
                        </td>
                        <td className={classNameTable}>descripción</td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}

type TTableParameters = {
    parameters: string[]
}

function TableParameters({parameters}: TTableParameters) {
    const classNameTable = "px-4 py-2";
    return <>
        <div>
            <p className={"text-blue-500 uppercase font-bold "}>Parametros</p>
            <table className={""}>
                <thead className={"border-b w-full text-left text-sm "}>
                <tr>
                    <th className={classNameTable}>Campo</th>
                    <th className={classNameTable}>Tipo</th>
                    <th className={classNameTable}>Descripción</th>
                </tr>
                </thead>
                <tbody>
                {
                    parameters.length === 0 && <tr>
                        <td colSpan={3} className={"text-center"}>Sin parámetros</td>
                    </tr>
                }

                {
                    parameters.map((j, index) => {
                        return <tr key={index}>
                            <td className={classNameTable}>
                                {j}
                            </td>
                            <td className={classNameTable}>tipo</td>
                            <td className={classNameTable}>descripción</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    </>
}