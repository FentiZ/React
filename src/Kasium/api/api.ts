const BASE_URL = "https://localhost:44332";

export const api = async (url: string, options: any = {}) => {
  const res = await fetch(BASE_URL + url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
      ...(options.headers || {})
    }
  });

  if (!res.ok) throw new Error("API error");

  return res.json();
};