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
        async registerUser({commit}, {email, password}) {
            commit('clearError');
            commit('setLoading', true);
            //  Запрос на сервер
            let isRequestOk = true; // в методичке стоит false
            let promise = new Promise(function(resolve) {
                setTimeout(() => resolve('Done'), 3000);
            });
                
            if (isRequestOk) {
                await promise.then(() => {
                    commit('setUser', new User(1, email, password))
                    commit('setLoading', false)
                });
            } else {
                await promise.then(() => {
                    commit('setLoading', false)
                    commit('setError', 'Ошибка регистрации')
                    throw 'Упс. Ошибка регистрации.'
                })
            };
        },
        async loginUser({commit}, {email, password}) {
            commit('clearError');
            commit('setLoading', true);
            //  Запрос на сервер
            let isRequestOk = true; // в методичке стоит false
            let promise = new Promise(function(resolve) {
                setTimeout(() => resolve('Done'), 3000);
            });
                
            if (isRequestOk) {
                await promise.then(() => {
                    commit('setUser', new User(1, email, password))
                    commit('setLoading', false)
                });
            } else {
                await promise.then(() => {
                    commit('setLoading', false)
                    commit('setError', 'Ошибка входа')
                    throw 'Упс. Ошибка входа.'
                })
            };
        },
        logoutUser({commit}) {
            commit('setUser', null);
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isUserLoggedIn(state) {
            return state.user !== null;
        }
    }
}