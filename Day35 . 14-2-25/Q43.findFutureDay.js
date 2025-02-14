// find the jump day means after the given day
function findFutureDay(currentDay, N) {
    let futureDay;

    if (currentDay === "Monday") {
        futureDay = (N % 7 + 0) % 7; // 0 for Monday
    } else if (currentDay === "Tuesday") {
        futureDay = (N % 7 + 1) % 7; // 1 for Tuesday
    } else if (currentDay === "Wednesday") {
        futureDay = (N % 7 + 2) % 7; // 2 for Wednesday
    } else if (currentDay === "Thursday") {
        futureDay = (N % 7 + 3) % 7; // 3 for Thursday
    } else if (currentDay === "Friday") {
        futureDay = (N % 7 + 4) % 7; // 4 for Friday
    } else if (currentDay === "Saturday") {
        futureDay = (N % 7 + 5) % 7; // 5 for Saturday
    } else if (currentDay === "Sunday") {
        futureDay = (N % 7 + 6) % 7; // 6 for Sunday
    } else {
        return "Invalid current day";
    }

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return daysOfWeek[futureDay];
}

// Example usage:
const currentDay = "Wednesday"; // Change this value to test
const N = 8; // Change this value to test
const futureDay = findFutureDay(currentDay, N);
console.log(`The day after ${N} days will be: ${futureDay}`);