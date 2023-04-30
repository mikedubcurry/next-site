import Link from "next/link";

export default function CoolIndex() {
  return (
    <main>
      <h1>Cool Stuff</h1>
      <p>
        This is a bunch of things I've made over the years that I think are
        kinda cool.
      </p>
      <section>
        <h2><Link className="underline" href="/games">Games</Link></h2>
        <ul>
          <li>
            <Link href="/minesweeper">Minesweeper Game</Link>
          </li>
          <li>
            <Link href="">Dungeon Dweller</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2><Link className="underline" href="/sounds">Sounds</Link></h2>
        <p>
          Before programming, I was a musician. I still make music, but mostly
          electronic stuff. Here are some things I am a little proud of.
        </p>
        <ul>
          <li>
            <Link target="_blank" rel="noopener noreferer" href="https://soundcloud.com/mikedubcurry">Soundcloud</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
