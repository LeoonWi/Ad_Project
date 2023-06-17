import store from '../stores';

export default function(to, from, next) {
    if (store.getters.user) {
        next()
    } else {
        next('/login?LoginError=true')
    }
}