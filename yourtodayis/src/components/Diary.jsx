import './Diary.css'
import LeftPage from './LeftPage';
import Modal from './Modal.jsx'

function Diary() {
  return (
    // 페이지 div 
    <div className="book-shape-div">
        {/* 페이지 선 div */}
      <LeftPage/>
      <div className="book-shape-line"></div>
    </div>
  );
}

export default Diary;


