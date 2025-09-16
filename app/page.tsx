import Greeting from "@/components/Greeting";

export default function Home() {
  return (
        <section className={"bg-teal-100 min-h-screen flex flex-col items-center"}>
            <h1 className="text-3xl font-bold text-blue-600 text-center pt-4">Dao like dih</h1>
            <div className={"flex flex-wrap items-center justify-center w-full"}>
                <button className="mt-4 text-red-300 rounded bg-amber-300 px-4 cursor-pointer py-2 hover:bg-gray-700">Click me</button>
                <Greeting name = "KTP"/>
            </div>
        </section>

  );
}
