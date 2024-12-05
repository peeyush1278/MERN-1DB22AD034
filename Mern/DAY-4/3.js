function calculateBonus(experience, performanceScore) {
    let bonusPercentage;

    if (experience > 5 && performanceScore > 8) {
        bonusPercentage = 20; // 20% bonus
    } else if (experience > 3 && experience <= 5 && performanceScore > 7) {
        bonusPercentage = 10; // 10% bonus
    } else {
        bonusPercentage = 5; // 5% bonus for 3 years or less experience
    }

    return bonusPercentage;
}

// Example usage
const experience = 4; // years of experience
const performanceScore = 9; // performance score

const bonus = calculateBonus(experience, performanceScore);
console.log(`The bonus percentage for an employee with ${experience} years of experience and a performance score of ${performanceScore} is ${bonus}%.`);