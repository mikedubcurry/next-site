import Humphrey from "../../public/Humphrey.jpg";
import Hamilton from "../../public/Hamilton.jpg";
import June from "../../public/June.jpg";
import AnimalImage from "@/lib/AnimalImage";
import NextLink from "next/link";
import { Link } from "@/lib/Link";
import { Heading } from "@/lib/Heading";
import { Section } from "@/lib/Section";

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
            <Section>
                <Heading level={2}>A Bit About Myself</Heading>
                <p>My name is Michael, and I love building large-scale software systems. I live in Saugerties with an occasional commute to the office at <Link href="https://troyweb.com" target="_blank" rel="noopener noreferer">Troy Web</Link> where I work with an amazing group of people. In my spare
                    time, I like to experiment with different sounds and produce
                    electronic music. You can find all of that
                    {" "} <Link title="Michael's Soundcloud"
                        href="https://soundcloud.com/mikedubcurry">here</Link></p>
            </Section>
            <Section>
                <Heading level={2}>Cool Links</Heading>
                <p>Links that I think are cool.</p>
                <ul className="list-disc list-inside px-4 mb-2">
                    <li className="mb-2">
                        <span className="font-bold">
                            <NextLink href="https://www.youtube.com/watch?v=xuCn8ux2gbs" target="_blank" rel="noopener noreferrer">
                                The History of the World, I Guess
                            </NextLink>
                        </span>{" "}
                        <p>
                            A hilarious and informative video about the history of the world.
                        </p>
                    </li>
                    <li>
                        <span className="font-bold">
                            <NextLink href="https://www.youtube.com/watch?v=9C_HReR_McQ" target="_blank" rel="noopener noreferrer">
                                Antoher Cool Thing
                            </NextLink>
                        </span>{" "}
                        <p>
                            A hilarious and informative video about the history of the world.
                        </p>
                    </li>
                </ul>
            </Section>
            <Section>
                <Heading level={2}>Some More About Myself</Heading>
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
            </Section>
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
            <Section>
                <p>
                    This site is built with{" "}
                    <NextLink href="https://nextjs.org" className="">
                        Next.js
                    </NextLink>{" "}
                    and{" "}
                    <NextLink href="https://tailwindcss.com" className="">
                        Tailwind CSS
                    </NextLink>
                    . It is hosted on{" "}
                    <NextLink href="https://vercel.com" className="">
                        Vercel
                    </NextLink>
                    .
                </p>
                <p>
                    You can view this site's <Link href="https://github.com/mikedubcurry/next-site" target="_blank" rel="noopener noreferrer" >source code</Link> as well as the rest of my work on{" "}
                    <NextLink href="https://github.com/mikedubcurry" target="_blank" rel="noopener noreferrer" className="">
                        GitHub
                    </NextLink>
                    .
                </p>
                <p>EST 2023</p>
            </Section>
        </>
    );
}
