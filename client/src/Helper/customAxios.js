
import axios from 'axios';

export const API_ROOT = 'http://115.187.33.12:9000';

const axiosInst = axios.create({
  baseURL: API_ROOT,
});

// axiosInst.interceptors.response.use((response) => {
//   let res = response;
//   console.log({ 'axiosResponse': response });
//   const tokentoSave = response.data.token;
//   const data = response.data;
  
//   if (response.status === 401) {
//     return window.location('/');
//   }
//   return response;
// });

// axiosInst.interceptors.request.use((request) => {
//   let res = request;
//   var AUTH_TOKEN = localStorage.getItem(defaultConfig.TOKEN);
//   axiosInst.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;
//   console.log({ 'axiosRequest': request });
//   return request;
// });

export default axiosInst;