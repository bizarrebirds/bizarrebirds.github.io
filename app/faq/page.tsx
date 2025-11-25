import Header from "@/app/header";
import { Description, Subheading } from "../text";

export default function ClassesPage() {
    return (
        <div className="w-full h-screen">
            <Subheading text="What subjects do you tutor, and what is your rate?" />
            <Description text="Please see my class list and rate breakdown on the [Classes] page." />
            <Subheading text="Why choose this tutoring service?" />
            <Description text="My experience gives me a degree of familiarity with the expectations of today’s educational system that the average college-aged tutor simply does not have." />
            <Description text="I have served for over a decade in education; I’ve instructed K-12 as well as college-level courses, and I’ve worked within both public and private systems across multiple states, including as an administrator." />
            <Description text="I’ve also presented for a College Board panel discussion on college essay writing due to my success with students preparing to enter elite colleges and universities." />
            <Subheading text="What makes your approach different?" />
            <Description text="I specialize in helping STEM-minded students make sense of the humanities." />
            <Description text="To do this, I use language and structure that is already familiar to these students. I break esoteric humanities concepts down into structures and formulae that, when applied, produce positive results every time." />
            <Description text="The toolkit I teach is flexible enough that each student’s own voice is front and center, while still reliably answering the question, “what does my teacher expect of me?”" />
            <Subheading text="How is each session structured, and how should students prepare for it?" />
            <Description text="I take an active approach to organizing each class. I don’t wait to see what each student brings to our session before coming up with a plan of action; instead, I usually follow the following structure for a typical 60-minute class:" />
            <ul className="list-disc list-inside">
                <li><Description inline text="10 minutes: Warm-up; greetings & questions from independent work" /></li>
                <li><Description inline text="10 minutes: Introduce or revisit a major concept (ex: the five-part thesis statement)." /></li>
                <li><Description inline text="30 minutes: Apply the concept via active collaboration on the necessary work." /></li>
                <li><Description inline text="10 minutes: Cool-down; Q&A about concepts and next steps. Start independent work in case questions arise. During independent work, I will fill out my daily report." /></li>
            </ul>
            <Subheading text="As a parent, will I get updates on my student’s progress?" />
            <Description text="Of course!" />
            <Description text="I provide a general update to parents once a month via emails entitled “Monthly Update: [Student’s First Name]”. That way, you can stay in the loop while still supporting your child’s ownership over their day-to-day responsibilities." />
            <Description text="Additionally, I do keep records of what my students and I work on in each class. While I don’t share these unless requested to reduce parents’ mental load, you are of course welcome to request them at any time." />
            <Description text="The basic expectation I have for my students’ performance is that they take care of business and are the ones ultimately responsible for their own academic success. That being said, if your student is consistently struggling, I will reach out to you outside of the monthly updates so that we can build a circle of support for them. I will also reach out if your student has something to celebrate from our most recent session!" />
            <Subheading text="As a parent, what do you need from me to ensure my child’s success?" />
            <Description text="This looks different for every child and every age, so I would be happy to speak with you over the phone/Zoom about what your child’s individual needs are." />
            <Description text="In general, I find that the average high school student is most successful when they are the first point of responsibility for their own success, and their parents/school/tutor are open and available to offer help and guidance when needed." />
            <Subheading text="My child struggles with executive functioning and/or learning differences. Would your approach work for them?" />
            <Description text="Of course!" />
            <Description text="I have five years of experience working directly with students who have documented learning differences, are neurodivergent, and/or struggle with executive functioning. I’m able to differentiate instruction for my students who may need to see or hear material presented in alternative ways." />
            <Description text="For example, I use tools like audiobooks and text-to-speech to scaffold reading material; I also use graphic organizers, timelines, and similar visual tools to help students organize their thoughts when, for instance, a blank Google Doc has not proven helpful." />
            <Description text="I employ these tools with the goal of growing your child’s confidence and skill with the core concept being addressed (reading comprehension; fluent college-level writing; etc.). Over time and with dedicated, consistent effort from myself, the student, and the student’s support group (family, school, etc.), most students find academic success in my experience." />
            <Description text="It is also worth noting that I find it useful to use these tools for any student who seems like they may benefit from them, regardless of whether they have a diagnosis or not. Sometimes brains just work one way versus another, and, as an educator, it’s my responsibility to be flexible for my student’s benefit." />
        </div>
    );
}