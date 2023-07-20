import axios from "../../Components/Utils/Utils";

export const getTags = async () => {
    const response = await axios.get("/tags");

    return response.data;
};
