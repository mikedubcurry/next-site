import Humphrey from "../../public/Humphrey.jpg";
import Hamilton from "../../public/Hamilton.jpg";
import June from "../../public/June.jpg";
import AnimalImage from "@/lib/AnimalImage";
import Link from "next/link";

export default function Home() {
  let currentYear = new Date().getFullYear();
  let juneYear = 2020;
  let humphreyYear = 2011;
  let hamiltonYear = 2017;
  const animalFacts = {
    Humphrey: `Humphrey is a ${
      currentYear - humphreyYear
    }-year-old cat who loves to eat and sit on the couch. His favorite toy is a frayed piece of string.`,
    Hamilton: `Hamilton is a ${
      currentYear - hamiltonYear
    }-year-old cat who loves to talk and is very playful. His favorite activity is licking his stuffed mouse toy.`,
    June: `June is a ${
      currentYear - juneYear
    }-year-old chicken who loves to eat and sit on her mother's lap. Her favorite activity is dust bathing in the dirt in our backyard`,
  };

  return (
    <>
      <section className="flex flex-col justify-center gap-4">
        <h2 className="text-2xl">About Me</h2>
        <p>I am a software engineer based in Saugerties, NY.</p>
        <p>
          I currently working at{" "}
          <a
            className="underline text-sky-300 hover:text-blue-400 transition-colors"
            href="https://troyweb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Troy Web
          </a>{" "}
          as a full-stack developer. I mostly work with Laravel and Vue.js, but
          I also have experience with React, Node.js, and am certified in AWS.
        </p>
        <p>
          I have two cats named Humphrey and Hamilton, as well as a chicken,
          June.
        </p>
      </section>
      <aside className="flex w-full flex-col md:flex-row gap-8 justify-between">
        <AnimalImage
          src={Humphrey}
          alt="Humphrey"
          shortCaption="Humphrey"
          longCaption={animalFacts["Humphrey"]}
          className={"object-right"}
        />
        <AnimalImage
          src={Hamilton}
          alt="Hamilton"
          shortCaption="Hamilton"
          longCaption={animalFacts["Hamilton"]}
        />
        <AnimalImage
          src={June}
          alt="June"
          shortCaption="June"
          longCaption={animalFacts["June"]}
        />
      </aside>
      <section className="flex flex-col justify-center gap-4">
        <h2 className="text-2xl">About This Site</h2>
        <p>
          This site is built with{" "}
          <Link href="https://nextjs.org" className="">
            Next.js
          </Link>{" "}
          and{" "}
          <Link href="https://tailwindcss.com" className="">
            Tailwind CSS
          </Link>
          . It is hosted on{" "}
          <Link href="https://vercel.com" className="">
            Vercel
          </Link>
          .
        </p>
        <p>
          You can view this site's <Link href="https://github.com/mikedubcurry/next-site" target="_blank" rel="noopener noreferrer" >source code</Link> as well as the rest of my work on{" "}
          <Link href="https://github.com/mikedubcurry" target="_blank" rel="noopener noreferrer" className="">
            GitHub
          </Link>
          .
        </p>
      </section>
    </>
  );
}
