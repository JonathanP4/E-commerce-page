const userLocale = navigator.language;

export const intlFormatNum = new Intl.NumberFormat(userLocale, {
  style: "currency",
  currency: "usd",
});
