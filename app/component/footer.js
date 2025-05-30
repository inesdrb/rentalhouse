"use client";

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-secondary py-4 px-6 text-center flex justify-between items-center text-primary">
                <Link href="#" className=' hover:text-trisary underline'>Contactez-nous</Link>

        <p className=" text-primary"> Le copyright RentHouse &copy; 2025</p>
        <div className="flex space-x-4 items-center ">
          <p>Follow us on Social Meia</p>
        <Link href="https://www.facebook.com" className=' hover:text-trisary '> <FaFacebook/> </Link>
        <Link href="https://Instagram.com" className=' hover:text-trisary '><FaInstagram/> </Link>
        <Link href="https://www.twitter.com" className=' hover:text-trisary'> <FaTwitter/></Link>
</div>

      </footer>
    );
   }