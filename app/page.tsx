import Image from "next/image";

function Testimonial({ text, author }) {
  return (
    <div>
      <p className="text-lg">"{text}"</p>
      <p className="text-sm">- {author}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <p className="text-5xl font-bold">Hook up here</p>
      <div className="flex flex-row items-center">
        <p className="flex-auto text-lg">Hello, I'm Kate</p>
        <div className="relative h-48 w-48">
          <Image src="/headshot.avif" alt="Kate's headshot" fill style={{ objectFit: "contain" }} />
        </div>
      </div>
      <p className="text-4xl font-bold py-4">Testimonials</p>
      <div className="flex flex-row gap-4">
        <Testimonial text="Kate is amazing! asdfklaj;sdlkjfa;lskdj;falkjs;dlfjasdf" author="David" />
        <Testimonial text="Kate is amazing! sldkfjlskd" author="David" />
        <Testimonial text="Kate is amazing! as;ifawoierh;wlkerl;kajw;glkjas;" author="David" />
        <Testimonial text="Kate is amazing! dsfsd" author="David" />
        <Testimonial text="Kate is amazing! owiejroiwejoirjew" author="David" />
      </div>
    </div>
  );
}
