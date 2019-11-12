class Transport {
    constructor (markaURL) {
        this.baseURL = markaURL;
        this.headers = new Headers({
            'Content-Type': 'application/json'
        });
        this.params = {
            headers: this.headers,
            mode: 'no-cors',
            credentials: 'include'
        }
    }

    setHeader (key, value) {
        this.headers.set(key, value);
    }

    async request (method, path, params) {
        if (!(this.baseURL && path && method)) {
            console.error(`Incorrect request params, method: ${method}, path: ${path}, baseURL: ${this.baseURL}`)
            return;
        }

        const config = params ? { ...this.params, ...params } : this.params;

        config.method = method.toUpperCase();

        try {
            const res = await fetch(`${this.baseURL}/${path}`, config);
            const json = await res.json();

            if (res.ok) {
                return {
                    result: json,
                    error: null
                };
            } else {
                return {
                    result: null,
                    error: json
                };
            }
        } catch (error) {
            return {
                result: null,
                error
            };
        }
    }
}

export default Transport;
