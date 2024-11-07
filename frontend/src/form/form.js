document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('createPostForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const user_id = document.getElementById('user_id').value;
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;

        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id, title, body })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Post created:', data);
                alert('Post created successfully!');
            })
            .catch(error => {
                console.error('Error creating post:', error);
                alert('Error creating post');
            });
    });
});