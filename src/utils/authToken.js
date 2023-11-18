export const getUserToken = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const localStorageValue = localStorage.getItem("persist:root");
      const parsedData = JSON.parse(localStorageValue);
      const authData = parsedData?.auth;
      const parsedAuthData = JSON.parse(authData);
      const authorizationData = parsedAuthData?.user?.authorization?.token;
      resolve(authorizationData || null);
    }, 200);
  });
};
