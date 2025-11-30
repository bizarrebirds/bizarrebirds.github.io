import Header from "@/app/header";
import FolderPage from "../folderpage";

export default function ClassesPage() {
    return (
        <FolderPage className="flex flex-col sm:flex-row">
            <div className="flex-1">
                <p>Class list</p>
                <b>English</b>
                <ul>
                    <li>K-8 English, Language Arts, and related courses</li>
                    <li>English I/9</li>
                    <li>English II/10</li>
                    <li>English III/11</li>
                    <li>English IV/12</li>
                    <li>Pre-AP English</li>
                    <li>AP English Language & Composition*</li>
                    <li>AP English Literature & Composition*</li>
                </ul>

                <b>History</b>
                <ul>
                    <li>K-8 History, Geography, and related courses</li>
                    <li>United States History</li>
                    <li>World History</li>
                    <li>American Government</li>
                    <li>AP United States History (APUSH)*</li>
                    <li>AP World History*</li>
                    <li>AP United States Government & Politics*</li>
                    <li>AP Comparative Government & Politics*</li>
                    <li>AP European History*</li>
                    <li>Special Topics History (i.e. World Religions, LGBTQ+ History, etc.)</li>
                </ul>

                <b>College Preparation</b>
                <ul>
                    <li>SAT Reading</li>
                    <li>SAT Writing</li>
                    <li>ACT English</li>
                    <li>ACT Reading</li>
                    <li>ACT Optional Writing (essay)</li>
                    <li>College Application Essay Writing: Common App, Coalition App, UCs, and individual</li>
                    <li>College Application Review: Common App, Coalition App, UCs, and individual</li>
                    <li>College Interview Preparation</li>
                </ul>

                *For all AP classes, tutoring sessions cover course content as well as AP test preparation (including essays, MCQs, DBQs, etc.). If you are not planning to take the AP test, please let me know as soon as you make that decision so that we can focus your tutoring sessions appropriately.
            </div>
            <div className="flex-1 mt-12 sm:mt-0 sm:mx-4 sm:px-4 sm:py-4 sm:bg-white">
                I offer the following:
                <br />-Initial Info Call (free)
                <br />-Trial Class (<span>$</span>50/hr)
                <br />-1:1 Tutoring Sessions (<span>$</span>100/hr)
                <br />-Small Group Tutoring Sessions (case-by-case)<br />

                Each class is one hour long and is dedicated to one subject from the list below. If your student is interested in receiving tutoring for multiple subjects, then each subject will be scheduled as a separate hour.<br />

                Most students take classes on a weekly or biweekly basis. Please let me know during our initial info call what your desired frequency is.<br />

                Please see below for the list of classes that I offer tutoring for, and more information about each type of session.<br />

                <b>Initial Info Call</b><br />
                As a prospective family, you likely have a few questions to ask me about what I offer and how my style of tutoring can bolster your child's success. Similarly, I always have some questions for families about the class(es) your student is taking and/or what their college application goals are, what their timeline is like, and how they learn best. To get our questions answered, I offer 30-minute complementary phone or Zoom calls with prospective families. You may set one up via the link below.<br />

                <a href="https://stembrainstutor.youcanbook.me/">Book an Initial Info Call</a><br />

                <b>Trial Class</b><br />
                I offer one hour-long trial class per student to allow you to get a sense of my teaching style. All trial classes are one-on-one between the teacher and the student, and they take place on Zoom.
                During the trial class, we will get to know each other, and I will work through relevant class material with you. If you have current work that you would like assistance with, I recommend providing it to me ahead of time via email and bringing it to the trial class.<br />

                <b><u>1:1 Tutoring Sessions</u></b><br />
                All classes take place on Zoom. I book tutoring sessions in blocks of 10 to allow predictability in our calendars.
            </div>
        </FolderPage>
    );
}