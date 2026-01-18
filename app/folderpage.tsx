import ButtonBase from "@mui/material/ButtonBase";
import Image from "next/image";

export default function FolderPage({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`w-full min-h-screen px-10 py-10 ${className}`}>
            {children}
            <div className="flex flex-col items-center">
                <ButtonBase href="https://www.tiktok.com/@your.humanities.t" target="_blank">
                    <Image src="TikTok-logo-RGB-Horizontal-black.png" alt="TikTok" width={10001} height={4168} className="w-50 self-center" />
                </ButtonBase>
            </div>
        </div>
    );
}