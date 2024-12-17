export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const calculateTax = (amount: number, rate: number = 0.1): number => {
  return amount * rate;
};

export const calculateTotal = (subtotal: number, taxRate: number = 0.1): number => {
  const tax = calculateTax(subtotal, taxRate);
  return subtotal + tax;
};