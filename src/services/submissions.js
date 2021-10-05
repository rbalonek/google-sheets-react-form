import api from "./api-config";

export const getAllSubmissions = async () => {
  const resp = await api.get("");
  return resp.data.data;
};
