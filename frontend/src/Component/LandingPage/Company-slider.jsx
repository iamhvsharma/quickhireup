import React from 'react';
import Image from 'next/image';

export default function TrustedBrands() {
  const brands = [
    {
      name: 'Google',
      logo: '/placeholder.svg',
      width: 120,
      height: 40
    },
    {
      name: 'Microsoft',
      logo: '/placeholder.svg',
      width: 130,
      height: 40
    },
    {
      name: 'Netflix',
      logo: '/placeholder.svg',
      width: 110,
      height: 40
    },
    {
      name: 'Amazon',
      logo: '/placeholder.svg',
      width: 120,
      height: 40
    },
    {
      name: 'Apple',
      logo: '/placeholder.svg',
      width: 40,
      height: 40
    },
    {
      name: 'Meta',
      logo: '/placeholder.svg',
      width: 120,
      height: 40
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center text-xl text-gray-600 font-medium mb-12">
          TRUSTED BY TOP BRANDS WORLDWIDE
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="w-full flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

