// Cấu hình tất cả thông tin axios ở trong đây
import axios from 'axios';
import { TOKEN_NAME } from '../constants';

export const api = {
  call: function() {
    return axios.create({
      baseURL: process.env.REACT_APP_BASE_URL
    });
  },
  callWithToken: function() {
    const token = localStorage.getItem(TOKEN_NAME);
    
    return axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}