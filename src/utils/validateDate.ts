export const validateDate = (value: string) => {
  const selectedDate = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  return selectedDate <= today || "A data deve ser igual ou anterior a hoje";
};

export const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};