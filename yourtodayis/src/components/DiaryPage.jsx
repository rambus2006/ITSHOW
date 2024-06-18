import './Diary.css'
import LeftPage from './LeftPage.jsx';
import RightPage from './RightPage.jsx';
import BackgroundComponent from './BackgroundComponent2.jsx';

function DiaryPage() {
  return (
    <div>
    {/* // 페이지 div  */}
    <div className="book-shape-div">
        {/* 페이지 선 div */}
      <LeftPage/>
      <div className="book-shape-line"></div>
      <RightPage/>
    </div>
    <BackgroundComponent/>
    </div>
    

  );
}

export default DiaryPage;


