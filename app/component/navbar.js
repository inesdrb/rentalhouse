"use client";
import Link from "next/link";
import Image from "next/image";


export default function NavBar(){
return (
    <div className="bg-trisary  flex justify-between items-center  px-6 py-4 ">
  <Image
            src="/images/logo.png" 
            alt="a louer"
            width={100}
            height={100}
            className="rounded-full hover:shadow"
            unoptimized
          />
    <nav className=" p-4 text-primary">
    <ul className="flex space-x-6  "> 
<li><Link  href='/' className="hover:text-secondary">Accueil</Link></li>
<li><Link  href='/annonces' className="hover:text-secondary">Annonce</Link></li>
<li><Link href='/contact'className="hover:text-secondary">Contact</Link></li>
<li><Link href='/inscription'className="hover:text-secondary">Inscription</Link></li>
</ul>
</nav>
<a
  className="group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
  href="#"
>
  <span className="absolute inset-0 border border-secondary"></span>
  <span
    className="block border border-secondary bg-secondary px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Connexion
  </span>
</a>
</div>
);
}
