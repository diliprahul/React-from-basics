const API_URL = "PASTE_API_URL_HERE";

export const getPatients = async () => {
  const username = "coalition";
  const password = "skills-test";

  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Basic ${btoa(
        `${username}:${password}`
      )}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch patients");
  }

  return response.json();
};