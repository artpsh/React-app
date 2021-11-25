import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "30bf6da2-e79e-4118-a11f-446a97898a6b"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileApi obj')
        return profileApi.getProfile()
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`status`, {
            status: 'Hi I am coder'
        })
    }
}



export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}