import FolderPage from "../folderpage";
import { Description, Subheading } from "../text";
import Link from "next/link";

export default function ClassesPage() {
    return (
        <FolderPage className="flex flex-col sm:flex-row">
            <div className="flex-1">
                <Subheading className="text-5xl mt-0!">Class List</Subheading>
                <Subheading>English</Subheading>
                <ul>
                    <li><Description>K-8 English, Language Arts, and related courses</Description></li>
                    <li><Description>English I/9</Description></li>
                    <li><Description>English II/10</Description></li>
                    <li><Description>English III/11</Description></li>
                    <li><Description>English IV/12</Description></li>
                    <li><Description>Pre-AP English</Description></li>
                    <li><Description>AP English Language & Composition*</Description></li>
                    <li><Description>AP English Literature & Composition*</Description></li>
                </ul>

                <Subheading>History</Subheading>
                <ul>
                    <li><Description>K-8 History, Geography, and related courses</Description></li>
                    <li><Description>United States History</Description></li>
                    <li><Description>World History</Description></li>
                    <li><Description>American Government</Description></li>
                    <li><Description>AP United States History (APUSH)*</Description></li>
                    <li><Description>AP World History*</Description></li>
                    <li><Description>AP United States Government & Politics*</Description></li>
                    <li><Description>AP Comparative Government & Politics*</Description></li>
                    <li><Description>AP European History*</Description></li>
                    <li><Description>Special Topics History (i.e. World Religions, LGBTQ+ History, etc.)</Description></li>
                </ul>

                <Subheading>Exam & College Preparation</Subheading>
                <ul>
                    <li><Description>SAT Reading and Writing</Description></li>
                    <li><Description>ACT English, Reading, and Optional Writing (essay)</Description></li>
                    <li><Description>PSAT/NMSQT Reading and Writing</Description></li>
                    <li><Description>SSAT Verbal and Reading</Description></li>
                    <li><Description>ISEE Verbal Reasoning, Reading Comprehension, and Essay</Description></li>
                    <li><Description>CoGAT all sections (Verbal, Quantitative, Nonverbal)</Description></li>
                    <li><Description>TOEFL iBT all sections (Reading, Listening, Speaking, and Writing)</Description></li>
                    <li><Description>GRE Analytical Writing and Verbal Reasoning</Description></li>
                    <li><Description>College Application Essay Writing: Common App, Coalition App, UCs, and individual</Description></li>
                    <li><Description>College Counseling & Application Review: Common App, Coalition App, UCs, and individual</Description></li>
                    <li><Description>College Interview Preparation</Description></li>
                    <li><Description>CV/Resume Writing</Description></li>
                </ul>

                <Description className="text-xs">*For all AP classes, tutoring sessions cover course content as well as AP test preparation (including essays, MCQs, DBQs, etc.). If you are not planning to take the AP test, please let me know as soon as you make that decision so that we can focus your tutoring sessions appropriately.</Description>
            </div>
            <div className="flex-1 mt-12 rounded-2xl sm:mt-0 sm:mx-4 sm:px-4 sm:py-4 sm:white-background">
                <Subheading className="mt-0!">What I Offer</Subheading>
                <ul>
                    <li><Description><Link href="#initial-info-call">Initial Info Call (free)</Link></Description></li>
                    <li><Description><Link href="#trial-class">Trial Class ($50/hr)</Link></Description></li>
                    <li><Description><Link href="#one-on-one-tutoring">1:1 Tutoring Sessions ($100/hr)</Link></Description></li>
                    <li><Description><Link href="#small-group-tutoring">Small Group Tutoring Sessions (case-by-case)</Link></Description></li>
                </ul>

                <Description>Each class is one hour long and is dedicated to one subject from the list below. If your student is interested in receiving tutoring for multiple subjects, then each subject will be scheduled as a separate hour.</Description>

                <Description>Most students take classes on a weekly or biweekly basis. Please let me know during our initial info call what your desired frequency is.</Description>

                <Description>Please see below for the list of classes that I offer tutoring for, and more information about each type of session.</Description>


                <Subheading id="initial-info-call">Initial Info Call</Subheading>
                <Description>
                As a prospective family, you likely have a few questions to ask me about what I offer and how my style of tutoring can bolster your child's success. Similarly, I always have some questions for families about the class(es) your student is taking and/or what their college application goals are, what their timeline is like, and how they learn best. To get our questions answered, I offer 30-minute complementary phone or Zoom calls with prospective families. You may set one up via the link below.
                </Description>

                <a href="https://stembrainstutor.youcanbook.me/">Book an Initial Info Call</a><br />

                <Subheading id="trial-class">Trial Class</Subheading>
                <Description>I offer one hour-long trial class per student to allow you to get a sense of my teaching style. All trial classes are one-on-one between the teacher and the student, and they take place on Zoom.
                During the trial class, we will get to know each other, and I will work through relevant class material with you. If you have current work that you would like assistance with, I recommend providing it to me ahead of time via email and bringing it to the trial class.</Description>

                <Subheading id="one-on-one-tutoring">1:1 Tutoring Sessions</Subheading>
                <Description>All classes take place on Zoom. A discount is available if you book tutoring sessions in blocks of 10, to allow predictability in our calendars.</Description>

                <Subheading id="small-group-tutoring">Small Group Tutoring Sessions</Subheading>
                <Description>Siblings or friends who are taking the same class (e.g. AP English Language) may inquire about small group classes at a reduced per-person rate. Typically, I allow a maximum of 3 students in a small group session so as to ensure I am able to spend ample time with each one individually. In your initial info call, please let me know if you are interested in this - I would be happy to discuss our options. All listed classes are available for small group tutoring sessions.</Description>
            </div>
        </FolderPage>
    );
}