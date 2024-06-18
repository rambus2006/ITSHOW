import React, { useState } from 'react';
import './CommentSection.module.css'; // CSS 모듈 import

function CommentSection() {
  const [comments, setComments] = useState([]); // 댓글 목록을 관리할 상태

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 기본 동작 방지

    const commentInput = event.target.elements.comment.value.trim(); // 입력된 댓글 내용

    if (commentInput === '') {
      alert('댓글을 입력하세요.'); // 빈 댓글은 추가하지 않음
      return;
    }

    // 새 댓글 객체 생성
    const newComment = {
      id: comments.length + 1, // 임시적으로 ID 생성 (실제로는 서버에서 생성)
      text: commentInput,
      createdAt: new Date().toLocaleString(), // 댓글 작성 시간
    };

    // 기존 댓글 목록에 새 댓글 추가 후 상태 업데이트
    setComments([...comments, newComment]);

    // 입력 필드 초기화
    event.target.elements.comment.value = '';
  };

  return (
    <div className="commentSection">
      <form onSubmit={handleSubmit} className="form">
        <textarea name="comment" rows="1" cols="50" placeholder="댓글을 입력하세요..." required></textarea>
        <button type="submit">댓글 달기</button>
      </form>

      <div className="commentList">
        {comments.length === 0 ? (
          <p>댓글이 없습니다.</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.createdAt}</strong>: {comment.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
