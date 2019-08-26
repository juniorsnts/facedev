const url = 'https://jsonplaceholder.typicode.com';

export const getUsers = () =>
    fetch(`${url}/users`).then(response => response.json());

export const getPosts = (id_user) => {
    let response = fetch(`${url}/posts?userId=${id_user}`).then(response => response.json());
    return response;
}

export const getComments = (post_id) =>
    fetch(`${url}/comments?${post_id}`).then(response => response.json());

