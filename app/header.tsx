'use client'
import { ButtonBase, Drawer, IconButton, Menu } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from 'next/navigation'
import { Fragment } from "react/jsx-runtime";
import React from "react";

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

function TabCircle({ before }) {
    return (
        <div className={`absolute bottom-0 w-6 h-6 z-10 rounded-full ${before ? "-left-6" : "-right-6"} bg-background`}></div>
    )
}

function TabSquare({ before, selected }) {
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
                <div className={`sm:py-2 md:py-1 px-8 border-4 border-transparent rounded-t-2xl font-semibold ${selected ? "selected" : "unselected"}`}>
                    {name}
                </div>
            </ButtonBase>
            <TabSquare before={false} selected={selected} />
            <TabCircle before={false} />
        </div>
    )
}

function MobileHeaderButton({ name, href }) {
    return (
        <ButtonBase href={href}>
            <div className={`py-1 px-8 selected`}>
                {name}
            </div>
        </ButtonBase>
    )
}

function MenuButton({ onClick }) {
    return (
        <IconButton color="inherit" onClick={onClick}>
            <MenuIcon />
        </IconButton>
    )
}

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <div className="sm:hidden flex flex-row items-center mb-4 mt-2">
                <MenuButton onClick={() => setOpen(true)} />
                <HomeButton />
            </div>

            <Drawer anchor="top" variant="temporary" open={open}>
                <div className="selected flex flex-row items-start px-4 py-4">
                    <MenuButton onClick={() => setOpen(false)} />
                    <div className="grow flex flex-col gap-6 pt-1 pr-7">
                        <MobileHeaderButton name="Classes" href="classes" />
                        <MobileHeaderButton name="FAQ" href="faq" />
                        <MobileHeaderButton name="Contact" href="contact" />
                    </div>
                </div>
            </Drawer>

            <div className="hidden sm:flex flex-row items-stretch gap-8 pr-8">
                <HomeButton />
                <HeaderButton name="Classes" href="classes" selected={pathname === "/classes"} />
                <HeaderButton name="FAQ" href="faq" selected={pathname === "/faq"} />
                <HeaderButton name="Contact" href="contact" selected={pathname === "/contact"} />
            </div>
        </div>

    )
}