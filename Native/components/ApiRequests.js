const apiUrl = 'http://192.168.232.189:3306';


const fetchData = async (path) => {
    try {
        const response = await fetch(`http://192.168.232.189:3306/${path}`);
        const json = await response.json();
        return json; // Return the entire JSON object
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const fetchSpecData = async (path, id) => {
    try {
        const response = await fetch(`${apiUrl}/${path}/${id}`);
        const json = await response.json();
        return json; // Return the entire JSON object
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const postData = async (path, data, params = {}) => {
    try {
        const url = new URL(`${apiUrl}/${path}`);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        const response = await fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body: JSON.stringify(data),
        });

        const json = await response.json();
        return json; // Return the response JSON
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const loginUser = async (username, password) => {
    try {
        const path = 'users/login';
        const data = {
            username: username,
            password: password,
        };

        const result = await postData(path, data);

        // Assuming the server returns a boolean property 'success'
        if (result.success !== undefined) {
            return result.success;
        } else {
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return false;
    }
};

export default { fetchData, fetchSpecData, postData, loginUser };