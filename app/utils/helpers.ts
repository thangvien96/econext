export const formatCurrencyVND = (amount: number) => {
  if (typeof amount !== 'number') {
    amount = Number(amount);
    if (isNaN(amount)) return '0';
  }

  return amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}