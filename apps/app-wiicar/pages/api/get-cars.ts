import { ICars } from 'core';
import { customAlphabet } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
const nanoidCustomLetter = customAlphabet('QWERTYUIOPLKJHGFDSAZXCVBNM', 3);
const nanoidCustomNumber = customAlphabet('0123456789', 3);

const brand = [
  'BMW',
  'Chevrolet',
  'Ferrari',
  'Fiat',
  'Ford',
  'JEEP',
  'Kia',
  'Mazda',
  'Mercedes-Benz',
  'Renault'
];
const transmissionTypes = ['automatic', 'mechanic'];
const provenance = ['used', 'new'];
function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ICars[]>
) {
  setTimeout(() => {
    res.status(200).json(
      [...new Array(1000)].map((_, index) => ({
        id: index + 1,
        licensePlate: `${nanoidCustomLetter()}${nanoidCustomNumber()}`,
        brand: brand[randomInt(brand.length - 1)],
        model: `${nanoidCustomLetter()}${String(randomInt(10))}`,
        kilometer: randomInt(200000),
        transmission: transmissionTypes[
          randomInt(transmissionTypes.length - 1)
        ] as 'automatic' | 'mechanic',
        type: 'Automóvil',
        price: randomInt(999999999),
        provenance: provenance[randomInt(provenance.length - 1)] as
          | 'used'
          | 'new'
      }))
    );
  }, 2000);
}
