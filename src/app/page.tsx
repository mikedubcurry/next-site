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
        Humphrey: `Humphrey is a ${currentYear - humphreyYear
            }-year-old cat who loves to eat and sit on the couch. His favorite toy is a frayed piece of string.`,
        Hamilton: `Hamilton is a ${currentYear - hamiltonYear
            }-year-old cat who loves to talk and is very playful. His favorite activity is licking his stuffed mouse toy.`,
        June: `June is a ${currentYear - juneYear
            }-year-old chicken who loves to eat and sit on her mother's lap. Her favorite activity is dust bathing in the dirt in our backyard`,
    };

    return (
        <>
            <section className="flex flex-col justify-center gap-4">
                <h2 className="text-2xl">Software Developer by Day, Dubstep Producer by Night</h2>
                <p>My name is Michael, and I love designing and building large scale software systems. I live in Saugerties with an occasional commute to work at <a
                    className="underline text-sky-300 hover:text-blue-400 transition-colors"
                    href="https://troyweb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Troy Web
                </a> where I work with an amazing group of people. In my spare
                    time, I like to experiment with different sounds and produce
                    dubstep and other electronic music. You can find all of that
                    {" "} <a title="Michael's Soundcloud"
                        href="https://soundcloud.com/mikedubcurry">here</a></p>
            </section>
            <section className="flex flex-col justify-center gap-4">
                <h2 className="text-2xl">Cool Links</h2>
                <p>Links that I think are cool.</p>
                <ul className="list-disc list-inside">
                    <li>
                        <span className="font-bold">
                            <Link href="https://www.youtube.com/watch?v=xuCn8ux2gbs" target="_blank" rel="noopener noreferrer">
                                The History of the World, I Guess
                            </Link>
                        </span>{" "}
                        <p>
                            A hilarious and informative video about the history of the world.
                        </p>
                    </li>
                    <li>
                        <span className="font-bold">
                            <Link href="https://www.youtube.com/watch?v=9C_HReR_McQ" target="_blank" rel="noopener noreferrer">
                                Antoher Cool Thing
                            </Link>
                        </span>{" "}
                        <p>
                            A hilarious and informative video about the history of the world.
                        </p>
                    </li>
                </ul>
            </section>
            <section className="flex flex-col justify-center gap-4">
                <h2 className="text-2xl">About Me</h2>
                <p>
                    I am a software developer who loves to learn new things. I
                    have experience with a wide range of technologies, including
                    both front-end and back-end JavaScript, as well as PHP and
                    Laravel. I am a certified AWS Cloud Practitioner and Solutions
                    Architect Associate.
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
            <section className="flex flex-col justify-center items-center gap-2">
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
                <p>EST 2023</p>
            </section>
        </>
    );
}
