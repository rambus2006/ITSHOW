import React from "react";

class GetUser extends React.Component {
  state = {
    profile_nickname: "",
    account_email: "",
  };

  componentDidMount() {
    // Kakao SDK 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    script.onload = () => {
      // Kakao SDK 스크립트가 로드된 후 Kakao.init() 호출
      window.Kakao.init('397368ee84d7d601d5665891d7ef7186');
      // SDK 초기화가 완료되면 사용자 정보 가져오기
      this.fetchUserInfo();
    };

    document.head.appendChild(script);

    // 컴포넌트가 언마운트될 때 스크립트 제거
    return () => {
      document.head.removeChild(script);
    };
  }

  // 사용자 정보를 가져오기 위한 메서드
  fetchUserInfo = () => {
    // Kakao.API.request를 사용하여 사용자 정보 요청
    window.Kakao.API.request({
      url: '/v2/user/me',
      data: {
        property_keys: (['kakao_account.email', 'kakao_account.profile.nickname']),
      },
    })
      .then((response) => {
        const { kakao_account } = response;
        const profile_nickname = kakao_account.profile.nickname;
        const account_email = kakao_account.email;

        // 상태 업데이트
        this.setState({
          profile_nickname,
          account_email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { profile_nickname, account_email } = this.state;

    return (
      <div>
        <h1>{profile_nickname}</h1>
        <h1>{account_email}</h1>
      </div>
    );
  }
}

export default GetUser;
