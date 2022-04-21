import { useQuery } from "react-query";
import axios from "axios";

const token = process.env.REACT_APP_ITAS_AUTH_TOKEN;

export const useITASQuery = (key, query, variables, config = {}) => {
    console.log("useITASQuery: query: ", query);
    return useQuery("itasquery", async () => {
        const { data } = await axios({
            method: "post",
            url: process.env.REACT_APP_ITAS_SERVICES_URL,
            headers: {
                authorization: `bearer ${token}`,
                "Content-Type": "text/plain",
            },
            data: query,
        });
        return data;
    });
};
