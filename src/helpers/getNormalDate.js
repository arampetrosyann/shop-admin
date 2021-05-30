const getNormalDate = (code = 0) => {
  let dateCode = code;

  if (!dateCode) {
    dateCode = Date();
  }

  const newDate = new Date(dateCode);

  const months = [
    "հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "Մայիս",
    "Հունիս",
    "Հուլիս",
    "Օգոստոս",
    "Սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր",
  ];

  const year = newDate.getFullYear();
  const date = newDate.getDate();
  const monthIndex = newDate.getMonth();

  const monthName = months[monthIndex];

  const result = `${date} / ${monthName} / ${year}`;

  return result;
};

export default getNormalDate;
