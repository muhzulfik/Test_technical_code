export const formatDateWorldTime = (dateString) => {
  const dateObj = new Date(dateString);

  const hours = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};
