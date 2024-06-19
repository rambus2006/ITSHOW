# 너의 오늘은 

### demo 
---
(press to start 깜박거리게는 되는데 제목 아래로 보내는 법을 모르겠음) 
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/717f9a4b-09df-4f01-9d57-89e62fbfd252)

![image](https://github.com/rambus2006/ITSHOW/assets/101540710/2e6117e2-700e-49bf-84fd-d89e9af9ede2)
(앨범 추가해야 함)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/f3b8438b-c1a6-407b-bf47-75c534a7b325)


![image](https://github.com/rambus2006/ITSHOW/assets/101540710/c0ea0b39-770b-420b-baa2-83a7a106ddcb)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/b336c446-2d56-4786-b99f-bd75c02e4580)


### 프로젝트 스펙 
- Front : React (localhost:3000)
- Back : node.js (localhost:4000)

### FE별 설명 
| 컴포넌트명| 기능 | 세부기능(관련파일) | 설명 |
|---|---|---|---|
|BackgroundComponent2.jsx|배경이미지||배경이미지를 보여주는 컴포넌트|
|Diary.jsx|일기장|Diary.css|내용 8|
|내용 9|내용 10|내용 11|내용 12|

### BE별 설명
|폴더| 파일명 | 기능설명 | 비고 |
|---|---|---|---|
| - |server.js |서버에 처음 진입했을 때 실행되는 파일 ||
| routes | index.js | 기본 라우터 파일||
| routes | messages.js | 메시지를 보냈을 때 처리하는 라우터 파일||
| controllers |userController.js| 유저 정보 컨트롤러 ||
| controllers |messageController.js|메시지 정보 컨트롤러||
| data | user.js | 임의의 유저 정보 api|

### 파일구조
```bash
├── public 
├── server
│     ├── server.js            # 서버 진입점 파일
│     ├── package.json         # 프로젝트 설정 파일
│     ├── public/              # 정적 파일 (HTML, CSS, JS 등)
│     │   └── index.html
│     ├── routes/              # 라우터 파일
│     │   └── index.js
│     ├── controllers/         # 컨트롤러 파일
│     │   ├── userController.js
│     │   └── messageController.js
│     └── data/                # 데이터 파일
│          └── users.js
├── src
  └── components
│   └── Home
│     ├── BackgroundComponent2.jsx
│     ├── Login.jsx : 처음 들어갔을 때의 화면
│     │
│     ├── Diary.jsx : server.js 에서 이름 fetch 해서 가져와서 표시해주는 리액트 코드 
│     │      ├── LeftPage.jsx
│     │      │     ├── Moodal.jsx
│     │      │     └── CommentSection.jsx
│     │      └── RightPage.jsx
│     │           ├── 서버를 통해 상대가 쓴 일기를 확인 가능 
│     │           └── CommentSection.jsx
│     ├── Home.jsx 
│     └── Sidebar
├── img : 이미지 파일 
├── App.js : Home 컴포넌트 로드
├── App.css : 기본 설정 파일
│   
└── run.sh
``` 
