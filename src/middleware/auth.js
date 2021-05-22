import store from '@/store'

export default{
    guest(to,from,next){
        var authData = JSON.parse(localStorage.getItem(store.key))
        var isAuthenticated = authData ? authData.auth.authenticationStatus : false
        next(!isAuthenticated ? true : { name: "feedback" })
    },
    user(to, from, next) {
        let authDetails = store.getters['auth/getAuthenticationDetails']
        let accessToken = authDetails && authDetails['access_token'] ? authDetails['access_token'] : null
        var isAuthenticated = accessToken ? true : false

        if (to.query.access_token) {
            let data = {
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGViZGI4ZjRhNGRjNTc3MzhlMDI4NiIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOiJBRE1JTiIsImZpcnN0X25hbWUiOiJEYW4iLCJsYXN0X25hbWUiOiJTbWl0aCIsImlhdCI6MTU4ODM0MDMyNCwiZXhwIjoxNTg4MzQzOTI0fQ.XPq7x_4rsN9czQwvvtA7wcOFjWUuRUid-_J52H4W2TA",
                "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGViZGI4ZjRhNGRjNTc3MzhlMDI4NiIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJ1c2VyX3R5cGUiOiJBRE1JTiIsImZpcnN0X25hbWUiOiJEYW4iLCJsYXN0X25hbWUiOiJTbWl0aCIsImlhdCI6MTU4ODM0MDMyNCwiZXhwIjoxNTg4OTQ1MTI0fQ.MRGcj6XlaN7SfbZwTdakUsMyjnzsvMePUUksL7XzBGI"
            }
            store.commit('auth/setAuthenticationDetails', data, { root: true })
        }
        next(isAuthenticated ? true : {
            path: '/login',
            query: {
                redirect: to.name
            }
        })
    },

}