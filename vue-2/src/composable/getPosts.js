export default async function getPosts() {
    let result = null;
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!data.ok) {
            throw Error('bir hata oldu');
        }
        result = await data.json();
    } catch (err) {
        throw Error(err);
    }
    return result
}