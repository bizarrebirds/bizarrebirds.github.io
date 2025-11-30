'use client'
import { ButtonBase } from "@mui/material";
import { usePathname } from 'next/navigation'
import { Fragment } from "react/jsx-runtime";

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

function TabCircle({before}) {
    return (
        <div className={`absolute bottom-0 w-6 h-6 z-10 rounded-full ${before ? "-left-6" : "-right-6"} bg-background`}></div>
    )
}

function TabSquare({before, selected}) {
    return (
        <div className={`absolute bottom-0 w-3 h-3 ${before ? "-left-3" : "-right-3"} ${selected ? "selected" : "unselected"}`}></div>
    )
}

function HeaderButton({ name, selected, href }) {
    return (
        <div className="relative">
            <TabCircle before={true} />
            <TabSquare before={true} selected={selected} />
            <ButtonBase href={href}>
                <div className={`py-1 px-8 border-4 border-transparent rounded-t-2xl ${selected ? "selected" : "unselected"}`}>
                    {name}
                </div>
            </ButtonBase>
            <TabSquare before={false} selected={selected} />
            <TabCircle before={false} />
        </div>

    )
}

export default function Header() {
    const pathname = usePathname();
    return (
        <div className="flex items-stretch gap-8 pr-3">
            <HomeButton />
            <HeaderButton name="Classes" href="classes" selected={pathname === "/classes"} />
            <HeaderButton name="FAQ" href="faq" selected={pathname === "/faq"} />
            <HeaderButton name="Contact" href="contact" selected={pathname === "/contact"} />
        </div>
    )
}