"use client";

import FolderPage from "../folderpage";
import { Description, Subheading } from "../text";

export default function VideosPage() {
    return (
        <FolderPage className="pt-0!">
            <Subheading className="text-5xl mt-0!">Videos</Subheading>
            <Description>
                Take a look at some of my online SAT/ACT walkthroughs to get a sense of
                what a session would be like.
            </Description>

            <div id="ycbm-container" className="mt-10 mx-auto w-fit">
                <iframe
                    width="1024"
                    height="576"
                    title="SAT/ACT walkthrough playlist"
                    src="https://www.youtube.com/embed/videoseries?si=Kpb7fKg0KkU6M4OP&amp;list=PLO5G--h8YQYkSZEWPuhQpk0h97PX-QWwj"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </FolderPage>
    );
}
