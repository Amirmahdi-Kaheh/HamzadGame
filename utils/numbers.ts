export function formatPrice(val: string | number) {
  const price = val.toString()
  const parts = price.split(".")
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return parts.length > 1 ? integerPart + "." + parts[1] : integerPart
}
