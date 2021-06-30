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
    start_page.style.display = 'none';
    step_1.style.display = 'block';
}

step_1_A.onclick = function step1_A_Answer () {
    result.push('1-A')

    step_1.style.display = 'none';
    step_2.style.display = 'block';
}

step_1_B.onclick = function step1_B_Answer () {
    result.push('1-B')

    step_1.style.display = 'none';
    step_2.style.display = 'block';
}

//TODO: 여기서부터 자바스크립트로 조건문을 작성해야 합니다.

// * step 2에서 A를 클릭한 경우 아래 코드가 실행됩니다.
step_2_A.onclick = function step2_A_Answer () {
    result.push('2-A')

    step_2.style.display = 'none';
   
    if(result[0] === '1-A') {
        //! (1단계) 결과 값이 1-A, 2-A 일 때, result_1 화면을 보여주세요.
        결과_화면.style.display = 'block';
    } else if(result[0] === '1-B') {
        //! (2단계) 결과 값이 1-B, 2-A 일 때, result_2 화면을 보여주세요.
        결과_화면.style.display = 'block';
    }
}

// * step 2에서 B를 클릭한 경우 아래 코드가 실행됩니다.
step_2_B.onclick = function step2_B_Answer () {
    result.push('2-B')

    step_2.style.display = 'none';

    if(result[0] === '1-A') {
        //! (3단계) 결과 값이 1-A, 2-B 일 때, result_3 화면을 보여주세요.
        결과_화면.style.display = 'block';
    } else if(result[0] === '1-B') {
        //! (4단계) 결과 값이 1-B, 2-B 일 때, result_4 화면을 보여주세요.
        결과_화면.style.display = 'block';
    }
}
