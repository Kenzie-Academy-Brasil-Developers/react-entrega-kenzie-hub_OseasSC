import {
  api
} from "./api";

export const getUserInformation = async () => {
  try {
    const token = localStorage.getItem("userSessionToken");
    if (!token) {
      throw new Error("Usuário não autenticado");
    }

    const ringBearer = `Bearer ${token}`; // lord of the rings pun...
    const headers = {
      "Content-Type": "application/json",
      Authorization: ringBearer,
    };

    const response = await api.get("/profile", {
      headers
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};