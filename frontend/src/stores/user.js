class User {
    constructor(id, email, pass) {
        this.id = id;
        this.email = email;
        this.pass = pass;
    }
}

export default {
    state: {
        user: null,
    },
    mutations: {
        setUser(state, payload) {
            console.log(payload);
            state.user = payload;
        }
    },
    actions: {
        registerUser({commit}, {email, pass}) {
            commit('setUser', new User(1, email, pass));
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    }
}