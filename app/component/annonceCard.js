'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AnnonceCard({ annonce }) {
  const router = useRouter();

  return (
    <div
      className="bg-secondary shadow-md rounded-md p-4 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:rotate-[0.2deg] text-center"
    >
      <div className="overflow-hidden rounded-md">
<p className="text-primary mt-3">{annonce.nom}</p>

        <Image
          src={annonce.image}
          alt={annonce.nom}
          width={500}
          height={500}
          className="object-contain h-64 w-full transition-transform duration-300 hover:scale-105"
          unoptimized
        />
      </div>
      <p className="text-primary font-bold mt-2">{annonce.prix}</p>
      <p className="text-primary font-bold">{annonce.cartegory}</p>
 <button   onClick={() => router.push(`/annonces/${annonce.id}`)} className="mt-4 px-4 py-4 bg-trisary text-primary rounded hover:bg-button ">Details des Maison</button>

    </div>
  );
}

