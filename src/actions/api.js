import axios from 'axios';

const basicConfig = {
    baseURL: 'https://devback.anetaed.org:3000',
  };
  
  const apiInstance = axios.create(basicConfig);
  
  apiInstance.interceptors.request.use(async (configuration) => {
    const accessToken = localStorage.getItem('token');
  
    return {
      ...configuration,
      headers: {
        ...configuration.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    };
  });
  
  
  export default apiInstance;