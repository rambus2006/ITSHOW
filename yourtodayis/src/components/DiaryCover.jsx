import './Diary.css'
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import BackgroundComponent from './BackgroundComponent2.jsx';

function DiaryCover() {
  return (
    <>
    {/* // 페이지 div  */}
    <div className="book-shape-div">
        {/* 페이지 선 div */}
      <LeftPage/>
      <div className="book-shape-line"></div>
      <RightPage/>
    </div>
    <BackgroundComponent/>
    </>
    

  );
}

export default DiaryCover;


