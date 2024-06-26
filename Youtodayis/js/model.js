function displayInput() {
    // contenteditable div 태그를 ID로 선택
    var userInputDiv = document.getElementById("userInput");

    // div 태그의 텍스트 내용을 가져옴
    var userInput = userInputDiv.innerText;

    // 출력할 div 태그를 선택
    var outputDiv = document.getElementById("displayDiv");

    // 출력할 div 태그에 입력 값을 설정
    outputDiv.innerText = userInput;
}
function resizeInput(input) {
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
}