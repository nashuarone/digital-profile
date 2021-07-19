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
      .then((res) => res.data)
      .catch((e) => {
        return e.response;
      });
  },
  login(email, password) {
    return axiosInstanse
      .post(`auth/login`, {
        email,
        password,
      })
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
  // refresh(refresh_token) {
  //   return axiosInstanse
  //     .post(`auth/refresh_token`, {
  //       refresh_token,
  //     })
  //     .then((res) => res)
  //     .catch((e) => {
  //       return e.response;
  //     });
  // },
  me() {
    return axiosInstanse
      .get(`users/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e.response;
      });
  },
  put(userId, firstName, secondName, thirdName, email, tel, birthDate) {
    return axiosInstanse
      .put(
        `users/${userId}`,
        {
          firstName,
          secondName,
          thirdName,
          email,
          tel,
          birthDate,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
};

export const storageAPI = {
  avatar(fileName, fileExtension, fileEncoded) {
    return axiosInstanse
      .post(
        `storage`,
        {
          fileName,
          fileExtension,
          fileEncoded,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
};
