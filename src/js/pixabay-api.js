// HTTP-запити
import axios from 'axios';

export async function fetchFunction(query, pageNumber, perPage) {
    try {
        const response = await axios.get("https://pixabay.com/api/", {
        params: {
            key: "47628462-4a8006828a6d084475c3078e6",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
                safesearch: "true",
                page: pageNumber,
                per_page: perPage
        }
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}