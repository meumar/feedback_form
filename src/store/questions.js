const state = {
questions:[] 
};
const getters = {
    getQuestions: state => state.questions,
}; 
const mutations = {
    setQuestions: (state, questions) => (state.questions = questions)
};
const actions = {
    async fetchQuestions ( { commit } ) {
        const res = await fetch ('https://api.jsonbin.io/b/5faa78482769cc5b06adb6a6')
        const data = await res.json();
        commit('setQuestions', data)
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced:true
}