// script.js
document.getElementById('submitComment').addEventListener('click', function() {
    var commentInput = document.getElementById('commentInput');
    var commentText = commentInput.value.trim();

    if (commentText) {
        var commentsList = document.getElementById('commentsList');

        var newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);

        commentInput.value = '';
    }
});
