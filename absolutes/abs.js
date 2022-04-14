function solution(absolutes, signs) {
    var sum = 0;
    var dec = 0;

    for(i = 0; i < absolutes.length; i++){
        if(signs[i] == true) {
            sum += absolutes[i];
        } else {
            dec += absolutes[i];
        }
    }
    console.log(sum-dec);
}

solution([1, 2, 3], [false, false, true]);


// 직접 다 하진 않았고 위성진 학생의 도움을 받아서 했습니다.