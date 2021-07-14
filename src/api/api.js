import axios from "axios";

//headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },

export const axiosInstanse = axios.create({
  baseURL: "https://tandemteam.site/api/",
  withCredentials: true,
});

export const authAPI = {
  signup(firstName, secondName, thirdName, email, tel, password, birthDate) {
    return axiosInstanse
      .post(`users`, {
        firstName,
        secondName,
        thirdName,
        email,
        tel,
        password,
        birthDate,
      })
      .then((res) => res.data);
  },
  login(email, password) {
    return axiosInstanse
      .post(`auth/login`, {
        email,
        password,
      })
      .then((res) => res.data);
  },
  auth() {
    return axiosInstanse
      .get(`auth/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => res.data);
  },
  me() {
    return axiosInstanse.get(`auth/me`).then((res) => res.data);
  },
  logout() {
    return axiosInstanse.delete(`auth/login`);
  },
};