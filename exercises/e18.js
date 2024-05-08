/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const asteroidYears = data.asteroids.map(asteroid => asteroid.discoveryYear);
  const yearCounts = asteroidYears.reduce((acc, year) => {
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const mostDiscoveriesYear = Object.keys(yearCounts).reduce((maxYear, year) => {
    return yearCounts[year] > yearCounts[maxYear] ? year : maxYear;
  });

  return parseInt(mostDiscoveriesYear);
}







// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
