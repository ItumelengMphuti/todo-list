document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('.container button');
  addButton.addEventListener('click', function() {
      window.open('post.html', '_blank', 'width=600,height=400');
  });
});
