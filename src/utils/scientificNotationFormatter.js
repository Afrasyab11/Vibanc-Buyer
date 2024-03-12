export default function convertToScientificNotation(number) {
  const prefixes = ["", "k", "M", "G", "T", "P", "E"];
  const thousand = 1000.0;

  let prefixIndex = 0;

  while (Math.abs(number) >= thousand && prefixIndex < prefixes.length - 1) {
    number /= thousand;
    prefixIndex++;
  }

  // Convert number to string without trailing decimal if not needed
  let formattedNumber = number.toString();
  if (formattedNumber.includes(".")) {
    formattedNumber = parseFloat(formattedNumber).toFixed(1);
  }

  // Return the number in scientific notation with a relative prefix
  return formattedNumber + prefixes[prefixIndex];
}
