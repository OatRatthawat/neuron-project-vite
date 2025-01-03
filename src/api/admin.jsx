import { http } from "../utils/http";

export const queryVersion = async () => {
    // console.log("queryVersion called")
    try {
        const response = await http.get('/version');
        console.log("queryVersion response: ", response);

        // Access Data
        const versionInfo = response.data;
        console.log("Version Info", versionInfo)

        return versionInfo;
    } catch (error) {
        console.error("Error fetching version info:", error);
        throw error;
    }
}

export const queryNetwork = async () => {
    // console.log("queryNetwork called");
    try {
        const response = await http.get('/network');
        console.log("queryNetwork response: ", response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}