export default async function getPost(id) {
    let result = null;
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    result = await data.json();
    return result
}