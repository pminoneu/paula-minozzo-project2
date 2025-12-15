// API Configuration for Sudoku App
// This file manages the backend API URL for different environments

const API_CONFIG = {
  // Development: Local backend
  development: 'http://localhost:8000',
  
  // Production: You'll need to deploy your backend to Render or another service
  // For now, we'll use localhost for development
  production: 'http://localhost:8000'
};

// Determine which environment we're in
const environment = import.meta.env.MODE || 'development';

// Export the appropriate API URL
export const API_BASE_URL = API_CONFIG[environment];

// API endpoints
export const API_ENDPOINTS = {
  // User endpoints
  register: `${API_BASE_URL}/api/user/register`,
  login: `${API_BASE_URL}/api/user/login`,
  logout: `${API_BASE_URL}/api/user/logout`,
  isLoggedIn: `${API_BASE_URL}/api/user/isLoggedIn`,
  
  // Game endpoints
  games: `${API_BASE_URL}/api/sudoku`,
  createGame: `${API_BASE_URL}/api/sudoku`,
  
  // Health check
  health: `${API_BASE_URL}/api/health`
};
