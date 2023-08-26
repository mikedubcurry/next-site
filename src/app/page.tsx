import ThemeContent from "./components/themeContent";
import ThemePicker from "./components/themePicker";

export default function Home() {
    return (
        <main className="">
            <section className="flex flex-col gap-8 h-screen w-full justify-center items-center ">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-center text-3xl">Michael Curry</h1>
                    <ThemePicker />
                </div>
                <div className="">
                    <ThemeContent />
                </div>
            </section>
            <section className="flex flex-col gap-8 h-screen w-full justify-center items-center">
                <h2 className="text-2xl">Highlights</h2>
                <ul className="">
                    <li className="mb-4">Shipped three apps to production at Troy Web</li>
                    <li className="mb-4">Received the Kick-Ass award at Troy Web Consulting</li>
                </ul>
            </section>
        </main>
    )
}
