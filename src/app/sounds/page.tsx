import Link from "next/link";

export default function SoundsIndex() {
  return (
    <>
      <h2>Sounds</h2>
      <section>
        <h3>Music</h3>
        <p>
          I have a{" "}
          <a
            href="https://soundcloud.com/mikedubcurry"
            target="_blank"
            rel="noopener noreferer"
          >
            SoundCloud
          </a>{" "}
          where I post music that I make. But I also like to bring some cool
          sounds to the browser, so I made a few things that you can play with.
        </p>
        <ul>
          <li>
            <Link
              href="/sounds/oscillator"
              className="underline decoration-blue-400 text-blue-400"
            >
              Oscillator
            </Link>
            <p>A simple oscillator with a lot of knobs and sliders</p>
          </li>
          <li>
            <Link
              href="/sounds/eq"
              className="underline decoration-blue-400 text-blue-400"
            >
              EQ
            </Link>
            <p>A somewhat simple equilizer hooked up to your microphone</p>
          </li>
          <li>
            <Link
              href="/sounds/vader"
              className="underline decoration-blue-400 text-blue-400"
            >
              Vader
            </Link>
            <p>A voice changer that makes you sound like Darth Vader, kinda</p>
          </li>
        </ul>
      </section>
    </>
  );
}
