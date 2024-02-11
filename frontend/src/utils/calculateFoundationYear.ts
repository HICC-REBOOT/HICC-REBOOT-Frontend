function calculateFoundationYear() {
  const FOUNDATION_YEAR = 1971;
  return new Date().getFullYear() - FOUNDATION_YEAR;
}

export default calculateFoundationYear;
