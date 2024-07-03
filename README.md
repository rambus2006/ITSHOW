# 너의 오늘은 

### 프로젝트 소개 
 IT쇼 출품작입니다. 커플들끼리 서로 일기를 교환할 수 있는 서비스입니다. 앨범기능을 통해 사진들을 넣을 수 있습니다. 
 
### 프로젝트 스펙 
- Front : React (localhost:3000)
- Back : node.js (localhost:4000)
- [프로젝트 바로가기]()

### demo 
---
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/ff344331-d786-460f-96a3-0a0fc326e7e9)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/5dde4268-6324-4a5b-ac77-7b3aa16ab017)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/975caa28-2838-4e70-9cca-8e155808afcb)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/151e598b-ab9f-4077-a3d6-6f81c59663fe)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/d989f1d6-88c2-43f1-b2f4-17b8c5999a0d)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/96bba69b-a2d0-4f1b-8e89-7eafcacb22bd)
![image](https://github.com/rambus2006/ITSHOW/assets/101540710/042c16b2-605c-4287-997b-47f8c71e417a)




### 파일별 설명 
| 파일명| 경로 | 기능(역할) | 사용툴 or 명령어 |
|---|---|---|---|
|App.js|yourtodayis| 클라이언트 측 라우팅을 설정하여 다양한 경로에 대해 각각의 컴포넌트를 렌더링하는 역할 | { BrowserRouter, Routes, Route } from 'react-router-dom'|
|BackgroundComponent2.jsx| yourtodayis/components | 그라데이션배경이미지를 로드하는 컴포넌트. | - |
|BackgroundComponent3.jsx| yourtodayis/components | 홈화면의 남색 배경이미지를 로드하는 컴포넌트 | - |
|index.jsx| " | 화면 아무곳이나 누르면 로그인 페이지로 리다이렉트하는 React 컴포넌트를 정의하는 역할.| - |
|Login.jsx| " | 이메일/비밀번호 로그인과 카카오 로그인을 처리하고, 로그인 후 사용자 정보를 가져와 화면에 표시하는 React 컴포넌트를 정의하는 역할|useState(): 상태관리, useEffect(): 컴포넌트가 렌더링 될 때마다 특정작업을 실행할 수 있게 하는 훅|
|Home.jsx| " | 다이어리나 앨범 페이지로 이동할 수 있는 홈 화면을 만들고, 배경 이미지와 사용자 정보를 표시하는 역할| useState: 이메일, 비번, 로그인 후 상태를 관리 | 
|Diary.jsx| " | 사용자의 일기를 서버에서 가져와 화면에 표시하고, 사용자가 일정 시간 동안 활동하지 않으면 자동으로 홈 페이지로 이동시키는 역할 | useState:diaryEntries라는 상태를 선언하고, 이 상태는 일기 데이터를 저장/useEffect: 컴포넌트가 처음 렌더링될 때 일기 데이터를 가져오고,사용자의 활동을 감지하고, 사용자가 활동할 때마다 타이머를 초기화한다./useRef:타이머를 참조하고, 이를 통해 타이머를 초기화하거나 제거하는 역할을 한다.|
|LeftPage.jsx | " | 일기장 페이지에서 사용자가 일기를 입력하고 저장할 수 있는 화면을 구성하는 컴포넌트이다. SocketModel 컴포넌트를 통해 일기 내용 입력 및 저장 기능이 구현된다.|useState :diaryText 상태를 생성하고, 해당 상태를 업데이트할 수 있는 setDiaryText 함수를 제공한다.|
|RightPage.jsx| " |서버로부터 실시간으로 받은 일기 목록을 화면에 표시하는 컴포넌트입니다. Socket.io를 사용하여 서버와 클라이언트 간의 실시간 통신을 구현하고, useEffect 훅을 이용하여 컴포넌트의 라이프사이클 이벤트를 관리합니다.|Socket.io:클라이언트에서 서버와의 실시간 통신을 위해 Socket.io 클라이언트를 설정 / useState: diaries라는 상태 변수를 선언하고, 초기값은 빈 배열([])로 설정한다. 이 상태는 서버로부터 받은 일기 목록을 관리한다./useEffect :socket.on('diarySaved', ...)은 서버에서 'diarySaved'라는 이벤트를 수신하여 새로운 일기가 저장될 때마다 실행되고, 새로운 일기는 상태에 추가된다.socket.off('diarySaved')는 컴포넌트가 언마운트될 때 이벤트 리스너를 정리한다. 
|Sidebar.jsx| " | 사이드바를 구성하는 컴포넌트로, 프로필 사진 업데이트, 홈으로의 이동, 체크박스 상태 관리 등의 기능을 제공합니다. 사용자가 프로필 사진을 업데이트하거나 메뉴 아이콘을 클릭할 때의 상호작용을 담당한다. |useState:프로필 사진 URL을 저장하는 상태 변수입니다. setProfilePicture 함수를 사용하여 사진을 업데이트|
|Socket.jsx|"|Socket.IO를 사용하여 실시간 채팅 기능을 구현하는 클라이언트입니다. 사용자는 메시지를 입력하고 전송할 수 있으며, 다른 사용자의 메시지도 실시간으로 받아 볼 수 있다.|Socket.IO: 서버와 클라이언트 간의 실시간 양방향 통신을 설정/useState:사용자 이름,입력된 메시지,채팅내용을 담는 배열을 useState로 관리 / useEffect:Socket.IO를 통해 서버에 연결하고 사용자 이름을 설정하며, 서버에서 받은 메시지를 업데이트한다.|
|SocketModel.jsx| " | 사용자가 입력한 일기 내용을 입력받아 서버에 저장하고, 저장된 일기를 실시간으로 HTML 형식으로 표시|useState:입력된 일기 내용을 관리,html형식으로 표시하는 것을 관리/ useEffect:서버에서 'diarySaved' 이벤트를 수신하면 저장된 일기를 HTML 형식으로 표시하고, 언마운트 때 이벤트 리스너를 정리|
|Album.jsx| " | 여러 장의 폴라로이드 이미지를 화면에 렌더링하고, 이미지를 업로드할 수 있는 기능을 제공합니다. 또한 사용자의 활동을 감지하여 일정 시간이 지나면 홈 화면으로 자동으로 이동한다. | useState:업로드된 사진을 저장/useRef :파일 입력 요소에 접근하기 위한 useRef 훅/useEffect:컴포넌트가 마운트될 때 사용자의 활동을 감지하여 일정 시간이 지나면 홈 화면으로 이동하는 타이머를 설정합니다. 또한, 컴포넌트가 언마운트될 때 이벤트 리스너를 정리|
|


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
│     │
│     ├── Home.jsx 
│     │   ├── Diary.jsx : server.js 에서 이름 fetch 해서 가져와서 표시해주는 리액트 코드 
│     │      ├── LeftPage.jsx
│     │      │     ├── Moodal.jsx
│     │      │     └── CommentSection.jsx
│     │      ├── RightPage.jsx
│     │      │     ├── 서버를 통해 상대가 쓴 일기를 확인 가능 
│     │      │     └── CommentSection.jsx
             └── Sidebar
│     
├── img : 이미지 파일 
├── App.js : 라우터로 각 컴포넌트별 경로 지정, 기본적으로 index.js 파일 로드 
├── App.css : 기본 스타일 설정 파일
│   
└── run.sh
``` 
