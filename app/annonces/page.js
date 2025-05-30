"use client";
import AnnonceCard from '../component/annonceCard';
import annonces from '../data/annonces';




export default function AnnonceList() {

 
  return (
    <div className="p-10 h-screen">
      <h1 className="text-3xl font-bold mb-6">Les Maisons à louer </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {annonces.map((annonce) => (
          <AnnonceCard key={annonce.id} annonce={annonce} />
        ))}
      </div>
    </div>
  );
}
