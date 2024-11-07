document.addEventListener('DOMContentLoaded', () => {
    const usersList = document.getElementById('users');
    const postsList = document.getElementById('posts');

    // Fetch et affiche les utilisateurs
    fetch('http://localhost:8000/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `${user.name} (${user.email})`;
                usersList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching users:', error));

    // Fetch et affiche les posts
    fetch('http://localhost:8000/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = `${post.title}: ${post.body}`;
                postsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});