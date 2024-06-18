//오른쪽 페이지 컴포넌트 
import axios from 'axios';


function RightPage(){
    // 서버에서 데이터 가져오기 (예시: axios를 사용한 GET 요청)
    axios.get('/get-diary')
    .then(response => {
        const diaryEntry = response.data;
        // 일기 내용을 화면에 표시하는 로직 추가
    })
    .catch(error => {
        console.error('일기 불러오기 중 오류가 발생했습니다:', error);
    });

    // 로컬 스토리지에서 데이터 가져오기
    const storedJson = localStorage.getItem('diaryEntry');
    if (storedJson) {
    const diaryEntry = JSON.parse(storedJson);
    // 일기 내용을 화면에 표시하는 로직 추가
    }

}
export default RightPage;
