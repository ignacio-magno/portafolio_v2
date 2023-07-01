import React from "react";

export default function WithSpace({elements}: { elements: string[] }) {
    return <>
        {
            elements.map((j, index) => {
                return <p className={"my-4"} key={index}>{j}</p>
            })
        }
    </>
}
