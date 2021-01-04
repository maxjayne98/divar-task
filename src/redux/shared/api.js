import request from "../../utils/request";

const api = {
  users: (count, nat) => {
    return request({
      baseURL: "https://randomuser.me/",
      url: `api?results=${count}&nat=${nat}`,
      method: "GET",
    });
  },
  getWidgets: () => {
    return request({
      baseURL: "http://localhost:3000/api/v1/",
      url: `widgets`,
      method: "GET",
    });
  },
};

export default api;
