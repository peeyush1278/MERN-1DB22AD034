function calculateBonus(experience, performanceScore) {
    let bonusPercentage;

    if (experience > 5 && performanceScore > 8) {
        bonusPercentage = 20; 
    } else if (experience > 3 && experience <= 5 && performanceScore > 7) {
        bonusPercentage = 10; 
    } else {
        bonusPercentage = 5; 
    }

    return bonusPercentage;
}


const experience = 4; 
const performanceScore = 9;

const bonus = calculateBonus(experience, performanceScore);
console.log(`The bonus percentage for an employee with ${experience} years of experience and a performance score of ${performanceScore} is ${bonus}%.`);