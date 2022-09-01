export const addZero = (numero: any) => {
  if (numero <= 9) {
    return "0" + numero;
  } else {
    return numero;
  }
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  let formatted = "";

  formatted =
    addZero(newDate.getDate().toString()) +
    "/" +
    addZero((newDate.getMonth() + 1).toString()) +
    "/" +
    newDate.getFullYear();

  return formatted;
};

export const randomColor = () => {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
};
