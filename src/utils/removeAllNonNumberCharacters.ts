export default function removeAllNonNumberCharacters(string: string): string {
  return string.replace(/[^\d]+/g, '');
}

export const getNumberWithDecimals = (value: string) => {
  if (!value) return;

  if (!value.includes(',')) return removeAllNonNumberCharacters(value);

  const [inteiro, decimal] = value.split(',');

  return Number(
    [
      removeAllNonNumberCharacters(inteiro),
      removeAllNonNumberCharacters(decimal),
    ].join('.')
  );
};
