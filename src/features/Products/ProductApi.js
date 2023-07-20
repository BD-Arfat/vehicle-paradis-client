import axios from "../../Components/Utils/Utils";

export const getProducts = async (tags, search) => {

    let queryString = '';

    if(tags.length > 0){
        queryString += tags.map(tag => `tags_like=${tag}`).join('&');
    }

    if(search !== ''){
        queryString += `&q=${search}`
    }

    const response = await axios.get(`/products/?${queryString}`);

    return response.data;
};
