import Link from "next/link";
import Image from "next/image";
import GithubLogo from "@/public/images/github.png";

export function GithubLink({href, version}: { href: string, version: string }) {
    return <Link href={href} target={"_blank"}>
        <div className={"flex gap-x-2 items-center"}>
            <Image src={GithubLogo} alt={"github logo"} height={20} width={20}/>
            <span className={"capitalize"}>
                github repository
            </span>
            <span className={"text-sm font-thin"}>{version}</span>
        </div>
    </Link>
}
