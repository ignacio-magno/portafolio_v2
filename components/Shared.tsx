import {CarbonLogoFacebook, CarbonLogoLinkedin, CarbonLogoTwitter} from "@/components/logos";
import Link from "next/link";

export default function Shared({href}: { href: string }) {
    const size = 25
    return <div className={"flex gap-x-4 items-center justify-end"}>
        <Link href={"https://twitter.com/intent/tweet?url=" + href} className={""} target={"_blank"} rel={"nofollow"} >
            <CarbonLogoTwitter fontSize={size}/>
        </Link>

        <Link href={"https://www.facebook.com/sharer/sharer.php?u=" + href} className={""} target={"_blank"}
              rel={"nofollow"}>
            <CarbonLogoFacebook fontSize={size}/>
        </Link>

        <Link href={"https://www.linkedin.com/sharing/share-offsite/?url=" + href} className={""} target={"_blank"}
              rel={"nofollow"}>
            <CarbonLogoLinkedin fontSize={size}/>
        </Link>
    </div>
}