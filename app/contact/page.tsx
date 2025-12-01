"use client";

import FolderPage from "../folderpage";
import { Description, Subheading } from "../text";
import Script from 'next/script';

export default function ClassesPage() {
    return (
        <FolderPage className="pt-0!">
            <Subheading className="text-5xl">Contact</Subheading>
            <Description>As a prospective family, you likely have a few questions to ask me about what I offer and how my style of tutoring can bolster your child's success. Similarly, I always have some questions for families about the class(es) your student is taking and/or what their college application goals are, what their timeline is like, and how they learn best. To get our questions answered, I offer 30-minute complementary phone or Zoom calls with prospective families. You may set one up below.</Description>

            <div id="ycbm-container" className="mt-10">
                <Script src="https://embed.ycb.me" async={true} data-domain="stembrainstutor" data-displaymode="auto" onReady={() => {
                    // Move to within ycbm-container
                    const container = document.getElementById('ycbm-container');
                    const iframe = document.querySelector('iframe');
                    if (container && iframe) {
                        container.appendChild(iframe);
                    }
                }} ></Script>
            </div>

        </FolderPage>
    );
}