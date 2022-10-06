function formatGrade(grade){
    let gradePerformance = '';

    if (grade < 3) {
        gradePerformance = 'Fail (2)';
        return(`${gradePerformance}`);
    }else if (grade < 3.50) {
        gradePerformance = 'Poor';
    }else if (grade < 4.50) {
        gradePerformance = 'Good';
    }else if (grade < 5.50) {
        gradePerformance = 'Very good';
    }else{
        gradePerformance = 'Excellent';
    }

    return(`${gradePerformance} (${grade.toFixed(2)})`);

}
 let result = formatGrade(5.50);
 console.log(result);