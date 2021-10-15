import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY" : "30bf6da2-e79e-4118-a11f-446a97898a6b"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersApi = {
      getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}
/*

export const getFollow = (u, follow) => {
    instance.post(`follow/${u.id}`, {})
        .then(response => {
            if (response.data.resultCode == 0) {
                follow(u.id)
            }
        });
}*/
