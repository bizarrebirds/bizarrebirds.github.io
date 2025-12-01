import Image from "next/image";
import FolderPage from "./folderpage";
import { Description, Subheading } from "./text";
import Link from "next/dist/client/link";

function Testimonial({ children, author }) {
  return (
    <div>
      <Description>"{children}"</Description>
      <Description className="text-xs italic">- {author}</Description>
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
        <Description>My students have gone on to attend <b>Ivy Leagues, UC schools, and top-10 programs in Computer Science, Engineering, and the Pre-Medical track</b>, as well as a variety of specialized programs in other fields. No matter what your dream is, we can work together to get you there!</Description>
        <Description>See my class information and rates under the <Link href="/classes">Classes</Link> tab.</Description>
        
      </div>
      <Subheading className="text-center sm:text-left">Testimonials</Subheading>
      <div className="flex flex-row flex-wrap gap-2">
        <Testimonial author="M.K., Pre-Med @ Baylor University">You have been super helpful and really understood what I needed. [Your class] is personalized, and improved my score by at least 200 points on the SAT.</Testimonial>
        <Testimonial author="A.N., Engineering @ University of Washington">Thank you so much for being so supportive and helpful through my college application process!</Testimonial>
        <Testimonial author="J.P., Parent">Thank you for all of your support of [E.P.] over the past couple of years. You have been a stabilizing force for her, probably more than you know.</Testimonial>
      </div>
    </FolderPage>
  );
}
