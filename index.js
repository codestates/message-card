let result = []

let start_page = document.querySelector('#start_page');
let start_btn = document.querySelector('.start-btn');
let step_1 = document.querySelector('#step_1');
let step_2 = document.querySelector('#step_2');
let step_1_A = document.querySelector('.step_1_A');
let step_1_B = document.querySelector('.step_1_B');
let step_2_A = document.querySelector('.step_2_A');
let step_2_B = document.querySelector('.step_2_B');
let result_1 = document.querySelector('#result_1');
let result_2 = document.querySelector('#result_2');
let result_3 = document.querySelector('#result_3');
let result_4 = document.querySelector('#result_4');

start_btn.onclick = function startHandler () {
    // ! (4단계) 시작페이지에서 start 버튼을 클릭했을 때 실행되는 코드입니다.
    
}

step_1_A.onclick = function step1_A_Answer () {
    result.push('1-A')
    // ! (4단계) Step_1 페이지에서 A 선택지를 클릭했을 때 실행되는 코드입니다.

}

step_1_B.onclick = function step1_B_Answer () {
    result.push('1-B')
    // ! (4단계) Step_1 페이지에서 B 선택지를 클릭했을 때 실행되는 코드입니다.

}

step_2_A.onclick = function step2_A_Answer () {
    result.push('2-A')

    step_2.style.display = 'none';

    if(result[0] === '1-A') {
        result_1.style.display = 'block';
        // console.log(result)
    } else if(result[0] === '1-B') {
        result_3.style.display = 'block'
        // console.log(result)
    }
}

step_2_B.onclick = function step2_B_Answer () {
    result.push('2-B')

    step_2.style.display = 'none';

    if(result[0] === '1-A') {
        result_2.style.display = 'block';
        // console.log(result)
    } else if(result[0] === '1-B') {
        result_4.style.display = 'block'
        // console.log(result)
    }
}
