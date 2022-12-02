import { ICars } from 'core';
import { customAlphabet } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
const nanoidCustomLetter = customAlphabet('QWERTYUIOPLKJHGFDSAZXCVBNM', 3);
const nanoidCustomNumber = customAlphabet('0123456789', 3);

const brand = [
  'Mazda',
  'Ford',
  'Chevrolet',
  'Fiat',
  'Renault',
  'Ferrari',
  'Kia'
];
const type = ['automatic', 'manual'];
const provenance = ['used', 'new'];
function randomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ICars[]>
) {
  console.log('entre');
  res.status(200).json(
    [...new Array(1000)].map((_, index) => ({
      id: index + 1,
      licensePlate: `${nanoidCustomLetter()}${nanoidCustomNumber()}`,
      brand: brand[randomInt(brand.length - 1)],
      model: String(randomInt(10)),
      kilometer: randomInt(200000),
      transmission: type[randomInt(type.length - 1)],
      type: 'car',
      price: randomInt(999999999),
      provenance: provenance[randomInt(provenance.length - 1)] as 'used' | 'new'
    }))
  );
}
