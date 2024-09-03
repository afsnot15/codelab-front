export const intMask = {
  mask: Number,
  scale: 0,
  padFractionalZeros: false,
  normalizeZeros: true,
};

export const ean13Mask = {
  mask: Number,
  scale: 0,
  padFractionalZeros: false,
  normalizeZeros: true,
};

export const monetaryMask = {
  mask: Number,
  scale: 2,
  thousandsSeparator: '.',
  padFractionalZeros: true,
  normalizeZeros: true,
  radix: ',',
  mapToRadix: ['.'],
  prefix: 'R$ ',
};
