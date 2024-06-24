# 너의 오늘은 

### demo 
---
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/ff344331-d786-460f-96a3-0a0fc326e7e9)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/7ac8ff85-233f-42bf-bbf8-deef57d95694)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/975caa28-2838-4e70-9cca-8e155808afcb)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/151e598b-ab9f-4077-a3d6-6f81c59663fe)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/d989f1d6-88c2-43f1-b2f4-17b8c5999a0d)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/60413b13-629d-4284-86d4-3217aee21cab)

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
