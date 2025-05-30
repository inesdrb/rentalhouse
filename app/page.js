'use client';
import Link from "next/link";
import Image from "next/image";
export default function Home() {

  return (
     <div className="bg-background-color   py-10 flex flex-col h-screen">
     <section className="bg-[url('/images/cover.jpg')] bg-cover bg-center ">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-primary sm:text-5xl ">
Welcome to        <strong className="text-trisary "> Rent House   </strong>
        For Location
      </h1>

      <p className="mt-4 text-base text-pretty text-primary sm:text-lg/relaxed dark:text-gray-200=))">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
        accusamus impedit minima harum corporis iusto.
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <Link
          className="inline-block rounded border border-trisary bg-trisary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-secondary"
          href="/annonces"
        >
          Annonces
        </Link>

        <Link
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-primary shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          href="#"
        >
          Publier
        </Link>
      </div>
    </div>
  </div>
</section>
       </div>

  );
}


 