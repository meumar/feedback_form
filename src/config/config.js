/*import store from "@/store";
import router from "@/router";
import fetchIntercept from 'fetch-intercept';

const apiURL = 'http://localhost:8080/'

const $fetch = fetch.create({
    baseURL:apiURL,
    timeout:1000
})
const res =fetchIntercept.register({
    request: function (apiURL, config) {
        config => {
            let authDetails = store.getters["auth/getAuthenticationDetails"];
            if (authDetails && authDetails["access_token"]) {
                config.headers.common["Authorization"] = authDetails["access_token"];
            } else {
                config.headers.common["Authorization"] = "";
            }
            return [apiURL, config];
        }
    },

    requestError: function (error) {
        return Promise.reject(error);
    },

    response: function (response) {
        return response;
    },

    responseError: function (error) {
        let originalRequest = error.config;
        let errorStatusCode = error.response.status;

        if (
            errorStatusCode === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            if (error.message == "jwt expired") {
                alert("Session Expired !")
            }
            resetStore()
            if (error.config.url !== '/login') {
                router.push("/login");
            }
        }
        return Promise.reject(error);
    }
})
const resetStore = () => {
    store.dispatch("globalReset");
}
export default $fetch;*/