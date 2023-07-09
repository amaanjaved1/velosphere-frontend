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

export const validateTerm = (term) => {
  // Make sure that the term is in the format of "S20" or "F20" or "W20"
  if (!/^[SFW]\d{2}$/.test(term)) {
    return false;
  }
  return true;
};

export const validatePastTerms = (pastTerms) => {
  // pastTerms is a string that is in the format "S20,F20,W20" or they could have spaces in between.
  // return an array of terms if valid, otherwise return false
  if (pastTerms === "" || pastTerms === "n/a") {
    return [];
  }

  const terms = String(pastTerms).split(",");
  const validTerms = [];

  for (let i = 0; i < terms.length; i++) {
    if (!validateTerm(terms[i])) {
      return false;
    }
    validTerms.push(terms[i]);
  }

  return validTerms;
};
