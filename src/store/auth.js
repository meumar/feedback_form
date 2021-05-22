//import fetch from "@/config/config"

const initialState = () => {
    return {
        user: null,
        authenticationStatus: null,
        authenticationDetails: {},
        signupCompleted: null,
        passwordUpdateStatus: null,
        generalErrorMessage: null
    };
};

const state = initialState();

const getters = {
    getAuthenticatedUser: state => state.user,
    isSignupCompleted: state => state.signupCompleted,
    getAuthenticationStatus: state => state.authenticationStatus,
    getAuthenticationDetails: state => state.authenticationDetails,
    getGeneralErrorMessage: state => state.generalErrorMessage,
    getPasswordUpdateStatus: state => state.passwordUpdateStatus,
};
const mutations = {
    setSignupStatus: (state, status) => {
        state.signupCompleted = status;
    },
    setAuthenticatedUser: (state, user) => {
        state.user = user;
    },
    setAuthenticationStatus: (state, status) => {
        state.authenticationStatus = status;
    },
    setAuthenticationDetails: (state, tokens) => {
        state.authenticationDetails = tokens;
    },
    setGeneralErrorMessage: (state, message) => {
        state.generalErrorMessage = message;
    },
    setPasswordUpdateStatus: (state, message) => {
        state.passwordUpdateStatus = message;
    },

    reset: state => {
        const initial = initialState();
        Object.keys(initial).forEach(key => {
            state[key] = initial[key];
        });
    },
};
const actions = {
    login: async (context , params) => {
        //context.commit("auth/reset", null, { root: true });
        try{
            const user_details = {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify(params)
            };
            console.log(user_details);
            const response = await fetch("https://dev-api.labsquire.com/v1.0/signin", user_details);
            let data = await response.json();
            console.log(data.access_token);
            let userDetails = data.user_details;
            let tokens = {
                access_token: data.access_token,
                refresh_token: data.refresh_token
            };
            context.commit("auth/setAuthenticatedUser", userDetails, { root: true });

            context.commit("auth/setAuthenticationDetails", tokens, { root: true });

            context.commit("auth/setAuthenticationStatus", true, { root: true });
        } catch (error){
            context.commit("auth/setAuthenticatedUser", null, { root: true });
            context.commit("auth/setAuthenticationDetails", null, { root: true });
            context.commit("auth/setAuthenticationStatus", false, { root: true });
        }
    },
    logout: async (context) => {
        context.commit("auth/reset", null, { root: true });
        context.commit("auth/resetProfileData", null, { root: true })
    },
    reset: function (context) {
        context.dispatch("errors/clear", [], { root: true });
        context.commit("auth/reset", null, { root: true });
    },
}
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}