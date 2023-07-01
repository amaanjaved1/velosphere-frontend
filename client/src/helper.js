export const getCurrentTerm = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Note: JavaScript months are zero-based
  let term = "";

  // Determine the term based on the current month
  if (currentMonth >= 5 && currentMonth <= 8) {
    term = "S";
  } else if (currentMonth >= 9 && currentMonth <= 12) {
    term = "F";
  } else if (currentMonth >= 1 && currentMonth <= 4) {
    term = "W";
  }

  // Generate the final term string
  const termString = `${term}${currentYear.toString().substr(2)}`;

  return termString;
};
