import axios from "axios";

//headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },

export const axiosInstanse = axios.create({
  baseURL: "https://tandemteam.site",
  withCredentials: true,
});

export const authAPI = {
  signup(firstName, secondName, thirdName, email, tel, password, birthDate) {
    return axiosInstanse
      .post(`/api/users`, {
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
      .post(`/api/auth/login`, {
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
      .get(`/api/users/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e.response;
      });
  },
  put(userId, firstName, secondName, thirdName, email, tel, birthDate, photo) {
    return axiosInstanse
      .put(
        `/api/users/${userId}`,
        {
          firstName,
          secondName,
          thirdName,
          email,
          tel,
          birthDate,
          photo,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, "Content-Type": "application/ld+json", },
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
        `/api/storage`,
        {
          fileName,
          fileExtension,
          fileEncoded,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/ld+json",
          },
        }
      )
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
  photo(photoLink) {
    return axiosInstanse
      .get(
        `${photoLink}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/ld+json",
          },
        }
      )
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
};

export const resumeAPI = {
  create(
    firstName,
    secondName,
    thirdName,
    tel,
    email,
    telegramIdentifier,
    discordIdentifier,
    fbLink,
    vkLink,
    placeOfResidence,
    birthDate,
    sex,
    militaryTicker,
    citizenship,
    desiredEmployment,
    desiredWorkSchedule,
    workExperiences,
    projectActivities,
    additionalInformation,
    availableLanguages,
    aboutMe,
    secondaryGeneralEducations,
    otherEducation,
    certificates
  ) {
    return axiosInstanse
      .post(
        `/api/resumes`,
        {
          firstName,
          secondName,
          thirdName,
          tel,
          email,
          telegramIdentifier,
          discordIdentifier,
          fbLink,
          vkLink,
          placeOfResidence,
          birthDate,
          sex,
          militaryTicker,
          citizenship,
          desiredEmployment,
          desiredWorkSchedule,
          workExperiences,
          projectActivities,
          additionalInformation,
          availableLanguages,
          aboutMe,
          secondaryGeneralEducations,
          otherEducation,
          certificates,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/ld+json",
          },
        }
      )
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
  edit(
    resumeId,
    firstName,
    secondName,
    thirdName,
    tel,
    email,
    telegramIdentifier,
    discordIdentifier,
    fbLink,
    vkLink,
    placeOfResidence,
    birthDate,
    sex,
    militaryTicker,
    citizenship,
    desiredEmployment,
    desiredWorkSchedule,
    workExperiences,
    projectActivities,
    additionalInformation,
    availableLanguages,
    aboutMe,
    secondaryGeneralEducations,
    otherEducation,
    certificates
  ) {
    return axiosInstanse
      .put(
        `/api/resumes/${resumeId}`,
        {
          firstName,
          secondName,
          thirdName,
          tel,
          email,
          telegramIdentifier,
          discordIdentifier,
          fbLink,
          vkLink,
          placeOfResidence,
          birthDate,
          sex,
          militaryTicker,
          citizenship,
          desiredEmployment,
          desiredWorkSchedule,
          workExperiences,
          projectActivities,
          additionalInformation,
          availableLanguages,
          aboutMe,
          secondaryGeneralEducations,
          otherEducation,
          certificates,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/ld+json",
          },
        }
      )
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
  get(resumeLink) {
    return axiosInstanse
      .get(`${resumeLink}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/ld+json",
        },
      })
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
};

export const feedbackAPI = {
  report(name, tel, email, message) {
    return axiosInstanse
      .post(
        `/api/reports`,
        {
          name,
          tel,
          email,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/ld+json",
          },
        }
      )
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
};

export const skillsAPI = {
  hard(userId) {
    return axiosInstanse
      .get(`/api/hard_skills/users/${userId}/data`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/ld+json",
        },
      })
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
  soft(userId) {
    return axiosInstanse
      .get(`/api/hard_skills/users/${userId}/history`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/ld+json",
        },
      })
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
};

export const notificationsAPI = {
  all(userId) {
    return axiosInstanse
      .get(`/api/users/${userId}/notifications`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/ld+json",
        },
      })
      .then((res) => res)
      .catch((e) => {
        return e.response;
      });
  },
};
