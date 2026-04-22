import articles from "@/data/articles";
import Link from "next/link";

export function Articles() {


    return (
        <>
            <section className="flex flex-col">
                <h3 className={"text-4xl text-black dark:text-white text-outline mx-auto mb-8 font-semibold font-lato select-none"}>Co u nas słychać</h3>
                <div className={"flex flex-col sm:flex-row  justify-center max-w-5xl mx-auto gap-8 mb-16 px-4 select-none "}>
                {articles.map((article) => (

                <article
                    key={article.id}
                    className="relative flex flex-col gap-3 px-6 py-5 font-lato cursor-pointer rounded-3xl border-2 transition-all duration-200
                                min-w-0 flex-1 focus:ring-yellow-300 focus:border-yellow-300 dark:focus:ring-blue-600
                                border-yellow-300/60 hover:border-yellow-300 text-black dark:text-white  hover:-translate-y-1 hover:translate-x-1
                                 dark:border-blue-600/60 hover: dark:hover:border-blue-600 dark:bg-gray-800 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 min-h-2xl "
                >

                    <Link href={"/article/" + article.id} className="absolute inset-0 rounded-3xl z-10" aria-label={article.title} >
                        <span className={"hidden"}>{article.title}</span>
                    </Link>
                    <span className="text-3xl"><article.emoji size={24}/></span>
                    <h3 className="font-bold text-lg leading-tight font-lato select-none">{article.title}</h3>
                    <p className="text-sm opacity-70 leading-relaxed">{article.description}</p>
                    <span className="text-xs opacity-50 mt-auto">{article.readTime} czytania</span>
                </article>

                ))}
                </div>
            </section>
        </>
    )
}