# 너의 오늘은 

### demo 
---
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/763a39df-379e-4605-8356-9cdcdda403dc)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/2e6117e2-700e-49bf-84fd-d89e9af9ede2)
(앨범 추가해야 함)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/f3b8438b-c1a6-407b-bf47-75c534a7b325)


![image](https://github.com/rambus2006/ITSHOW/assets/101540710/c0ea0b39-770b-420b-baa2-83a7a106ddcb)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/b336c446-2d56-4786-b99f-bd75c02e4580)


### 프로젝트 스펙 
- Front : React (localhost:3000)
- Back : node.js (localhost:4000)

### 컴포넌트 별 설명 
| 컴포넌트명| 기능 | 세부기능(관련파일) | 설명 |
|---|---|---|---|
|BackgroundComponent2.jsx|배경이미지||배경이미지를 보여주는 컴포넌트|
|Diary.jsx|일기장|Diary.css|내용 8|
|내용 9|내용 10|내용 11|내용 12|

### 파일구조
```bash
├── public 
├── server
│    └── server.js  :  임의로 만든 배열의 이름 api 가져오는 node.js 코드 
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
│     ├── Home.jsx : 현재 작업중인 파일 
│     └── Sidebar
├── img : 이미지 파일 
├── App.js : Home 컴포넌트 로드
├── App.css : 기본 설정 파일
│   
└── run.sh
``` 
