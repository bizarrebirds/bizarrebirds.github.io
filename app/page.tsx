import Image from "next/image";
import FolderPage from "./folderpage";
import { Description, Subheading } from "./text";
import Link from "next/dist/client/link";

function Testimonial({ children, author }) {
  return (
    <div className="inline-block align-top w-60 white-background rounded-2xl p-4 mr-8">
      <Description className="mt-0!">"{children}"</Description>
      <Description className="text-xs italic">- {author}</Description>
    </div>
  )
}

function TestimonialContainer({children}) {
  return (
    <div className="overflow-x-auto flex flex-row flex-nowrap items-start">
      <div className="whitespace-nowrap testimonial-parent">{children}</div>
      <div className="whitespace-nowrap testimonial-parent">{children}</div>
    </div>
  )
}

export default function Home() {
  return (
    <FolderPage>
      <h1 className="text-5xl font-bolder">English, History, & College Prep Tutoring</h1>
      <div>
        <div className="relative float-right h-40 sm:h-48 ml-4 mb-4 rounded-2xl overflow-hidden"
        style={{ aspectRatio: "23 / 16" }}>
          <Image src="/headshot.avif" alt="Kate's headshot" fill style={{ objectFit: "contain" }} />
        </div>
        <Description>If you often feel like you don’t know what to write next, are unsure why your teacher wants five paragraphs when you could make your point in five sentences, or find yourself leaning into Grammarly or ChatGPT for help, you have something in common with most of my students!</Description>
        <Description>Together, we’ll uncover the <b>hidden structure of the humanities</b> with my <b>logic-based systematic method</b> for essay writing, grammar, and text analysis.</Description>
        <Description>I’m <b>Kate</b>, an educator with <b>eleven years of experience</b> in teaching K-12 & college humanities subjects. I hold an MA in Anthropology and have recently served as an administrator at a local college preparatory school, building bespoke plans for college-bound students. I’ve also tutored high-achieving students in the Greater Seattle area & Bay Area for five years.</Description>
        <Description>My students have gone on to attend <b>Ivy Leagues, UC schools, and top programs in Computer Science, Engineering, and the Pre-Medical track</b> like MIT, Georgia Tech, Carnegie Mellon, Johns Hopkins, and University of Washington, as well as a variety of specialized programs in other fields. No matter what your dream is, we can work together to get you there!</Description>
        <Description>See my class information and rates under the <Link href="/classes">Classes</Link> tab.</Description>
        
      </div>
      <Subheading className="text-center sm:text-left">Testimonials</Subheading>
      <TestimonialContainer>
        <Testimonial author="M., Pre-Med @ Baylor University">You have been super helpful and really understood what I needed. [Your class] is personalized, and improved my score by at least 200 points on the SAT.</Testimonial>
        <Testimonial author="A., Engineering @ University of Washington">Thank you so much for being so supportive and helpful through my college application process, I really appreciate it!</Testimonial>
        <Testimonial author="J., parent">Thank you for all of your support of [E.P.] over the past couple of years. You have been a stabilizing force for her, probably more than you know.</Testimonial>
        <Testimonial author="M., University of Texas @ Austin">I got in! Thank you so much for all your help. I absolutely could not have done this without you :) You have been super helpful and really understood what I needed.</Testimonial>
        <Testimonial author="L., Physics @ Washington University of St. Louis">This class has tremendously helped me in my SAT progression and I have drastically improved in my test taking abilities. The environment is very welcoming and it has really fostered me to have a very positive mindset on my SAT preparation.</Testimonial>
        <Testimonial author="C., high school senior">The best thing is it is completely personalized so it helps you with all your needs. From SAT prep to helping with school subjects, you were really nice and super helpful.</Testimonial>
        <Testimonial author="R., high school junior">You helped me get more confident with my SAT and school, and you’re extremely friendly and understanding.</Testimonial>
        <Testimonial author="A., high school sophomore">I’ve improved my LASS [Language Arts & Social Studies] scores so much after studying with you for about a year. I feel more confident than before!</Testimonial>
        <Testimonial author="R., Computer Science @ Gonzaga">Thanks for narrowing [my essay] down so much. It is harder to delete stuff when I am the one who wrote it since I would like every part of what I wrote; having an outside perspective definitely helps.</Testimonial>
        <Testimonial author="A., Business @ Chapman University">Thanks for helping with making my speech as clear and memorable as possible.</Testimonial>
        <Testimonial author="N., Mathematics & Computer Science @ UC San Diego">I feel as if I have really improved on my SAT skills.</Testimonial>
        <Testimonial author="R., high school senior">You’ve been so helpful! I’ll miss you a lot and I hope to see you again sometime! Thank you so much, Ms. Kate!</Testimonial>
        <Testimonial author="E., Computer Engineering @ University of Washington">Great class to help you if you struggle.</Testimonial>
        <Testimonial author="D., fellow tutor">Thank you so much for all your hard work! I really appreciated having your kind and warm presence [on our team].</Testimonial>
        <Testimonial author="E., Software Engineer @ Amazon">I learned a lot!</Testimonial>
        <Testimonial author="D., parent">I wanted to say thank you again for everything you did for J. Take care!</Testimonial>
        <Testimonial author="S., parent">Thanks for your kind help!</Testimonial>
      </TestimonialContainer>
    </FolderPage>
  );
}
