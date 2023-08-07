let school = {
    NLCS: "North London Collegiate School",
    BHA: "Branksome Hall Asia",
    KIS: "Korea International School",
    SJA: "St. Johnsbury Academy",
}

console.log(school[require('fs').readFileSync('/dev/stdin').toString().trim()]);