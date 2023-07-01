import {useEffect} from "react";
import hljs from "highlight.js";

export default function CodeRender(props: { children: string, title: string, language: string }) {

    useEffect(() => {
        hljs.highlightAll();
        hljs.initHighlightingOnLoad()
    });

    return <div>
        <h3 className={"text-xl font-bold mb-4"}>{props.title}</h3>
        <div className={"max-h-96 overflow-y-auto bg-gray-100 border-2 border-gray-200"}>
            <pre>
            <code className={`{text-sm ${props.language}} bg-gray-100  style-atom-one-dark`}>
                {props.children}
            </code>
            </pre>
        </div>
    </div>
}