document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    posts.sort((a, b) => a.username.localeCompare(b.username));
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><p><em>by ${post.username}</em></p>`;
      postsContainer.appendChild(postElement);
    });
  });
  
  document.getElementById('toggleMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  