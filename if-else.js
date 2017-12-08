//  if-else statements

function getGrade(score) {
if(score <=5){
    return 'F';
} else if(score <= 10){
    return 'E';
} else if(score <= 15){
    return 'D';
} else if(score <= 20){
    return 'C';
} else if(score <= 25){
    return 'B';
} else
    return 'A';
}
  return grade;
}

// 1 liner
function getGrade(score) {
    return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
}
