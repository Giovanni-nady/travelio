import Image from "next/image.js";
import Link from "next/link.js";
import { NAV_LINKS } from "../constants/index.js";
import Button from "./Button.jsx";

export default function Navbar() {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                {/* <Image src="/hilink-logo.svg" alt="travelio logo" width={75} height={30} /> */}
                <h1 className="font-extrabold text-2xl">Tra<span className="text-green-50">velio.</span></h1>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex justify-center">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                        className="regular-16 text-gray-50 flexContainer cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"/>
            </div>

            <Image 
            className="lg:hidden inline-block cursor-pointer"
            src="menu.svg" alt="menu" width={32} height={32}/>
        </nav>
    )
}
