'use client'
import { ButtonBase } from "@mui/material";
import { usePathname } from 'next/navigation'

function HomeButton() {
    return (
        <div className="grow">
            <ButtonBase href="/">
                <div className="px-4">
                    Humanities for STEM Brains
                </div>
            </ButtonBase>
        </div>

    )
}

function HeaderButton({ name, selected, href }) {
    return (
        <ButtonBase href={href}>
            <div className={`py-4 px-8 border-4 border-transparent rounded-t-2xl`}
                style={{
                    backgroundColor: selected ? "yellow" : "orange",
                }}>
                {name}
            </div>
        </ButtonBase>
    )
}

export default function Header() {
    const pathname = usePathname();
    return (
        <div className="flex items-stretch gap-2">
            <HomeButton />
            <HeaderButton name="Classes" href="classes" selected={pathname === "/classes"} />
            <HeaderButton name="FAQ" href="faq" selected={pathname === "/faq"} />
            <HeaderButton name="Contact" href="contact" selected={pathname === "/contact"} />
        </div>
    )
}