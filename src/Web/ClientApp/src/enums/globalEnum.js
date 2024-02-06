const Gender = {
  MALE: 1,
  FEMALE: 2,
  OTHERS: 3,
};

export function GenderEnum(gender) {
  switch (gender) {
    case Gender.MALE:
      return "Male";
    case Gender.FEMALE:
      return "Female";
    case Gender.OTHERS:
      return "Others";
    default:
      return "Female";
  }
}
