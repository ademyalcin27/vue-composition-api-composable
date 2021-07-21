import { ref } from 'vue'
export default function getPost(fn) {
    const results = ref(results);
    const loading = ref(false);
    const error = ref(null);
    const fetch = async (...args) => {
        loading.value = true;
        error.value = null;
        results.value = null
        try {
            results.value = await fn(...args);
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }
    return { results, loading, error, fetch }
}