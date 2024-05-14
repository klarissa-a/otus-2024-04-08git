const getScore = (scores) => {
    let sum = 0;
    for (let key in scores) {
        const grade = scores[key];
        sum = sum + grade;
    }
    return sum;
}

const scores = {
    Bigmak: 45,
    KFC: 67,
    ROS: 80,
}
console.log(getScore(scores));

   