import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
};

// Video API
export const videoAPI = {
  getAllVideos: (page = 1, limit = 20) => 
    api.get(`/videos?page=${page}&limit=${limit}`),
  getVideoById: (id) => api.get(`/videos/${id}`),
  uploadVideo: (formData) => 
    api.post('/videos', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  updateVideo: (id, data) => api.put(`/videos/${id}`, data),
  deleteVideo: (id) => api.delete(`/videos/${id}`),
  searchVideos: (query) => api.get(`/videos/search?q=${query}`),
  likeVideo: (id) => api.post(`/videos/${id}/like`),
  unlikeVideo: (id) => api.post(`/videos/${id}/unlike`),
  getViews: (id) => api.get(`/videos/${id}/views`),
};

// User API
export const userAPI = {
  getProfile: (id) => api.get(`/users/${id}`),
  updateProfile: (id, data) => api.put(`/users/${id}`, data),
  subscribe: (id) => api.post(`/users/${id}/subscribe`),
  unsubscribe: (id) => api.post(`/users/${id}/unsubscribe`),
  getSubscriptions: () => api.get('/users/subscriptions'),
};

// Comment API
export const commentAPI = {
  getComments: (videoId) => api.get(`/comments?videoId=${videoId}`),
  addComment: (data) => api.post('/comments', data),
  updateComment: (id, data) => api.put(`/comments/${id}`, data),
  deleteComment: (id) => api.delete(`/comments/${id}`),
  replyToComment: (id, data) => api.post(`/comments/${id}/reply`, data),
};

// Playlist API
export const playlistAPI = {
  createPlaylist: (data) => api.post('/playlists', data),
  getPlaylists: () => api.get('/playlists'),
  getPlaylistById: (id) => api.get(`/playlists/${id}`),
  addVideoToPlaylist: (id, videoId) => 
    api.post(`/playlists/${id}/videos`, { videoId }),
  removeVideoFromPlaylist: (id, videoId) => 
    api.delete(`/playlists/${id}/videos/${videoId}`),
  deletePlaylist: (id) => api.delete(`/playlists/${id}`),
};

export default api;
