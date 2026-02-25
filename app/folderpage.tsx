import ButtonBase from "@mui/material/ButtonBase";
import Image from "next/image";

export default function FolderPage({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className="w-full min-h-screen px-10 py-10 flex flex-col">
            <div className={className}>
                {children}
            </div>
            <div className="mt-auto flex flex-row justify-center items-center py-10">
                <ButtonBase href="https://www.youtube.com/@yourhumanitiestutor" target="_blank">
                    <Image src="yt_logo_fullcolor_almostblack_digital.png" alt="Youtube" width={1705} height={573} className="w-50 self-center" />
                </ButtonBase>
                <ButtonBase href="https://www.tiktok.com/@your.humanities.t" target="_blank">
                    <Image src="TikTok-logo-RGB-Horizontal-black.png" alt="TikTok" width={10001} height={4168} className="w-50 self-center" />
                </ButtonBase>
            </div>
        </div>
    );
}
