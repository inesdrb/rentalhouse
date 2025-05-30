"use client";
import DetailsAnnonceCard from '@/app/component/details';
import annonces from '@/app/data/annonces';
import { useParams } from 'next/navigation';


export default function AnnonceDetails() {
  const { id } = useParams();
const annonce = annonces.find(a => a.id === Number(id));

  if (!annonce) {
    return <div className="p-4 text-red-500">Annonce introuvable</div>;
  }

  return (
    <div className="p-10 h-screen">
      <h1 className="text-3xl font-bold mb-6">Détails de l'annonce</h1>
      <DetailsAnnonceCard annonce={annonce} />
    </div>
  );
}
