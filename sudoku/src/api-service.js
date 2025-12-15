// API Service - Helper functions for making API requests
import { API_ENDPOINTS } from './api-config.js';

// Helper function to handle fetch requests with credentials
async function apiRequest(url, options = {}) {
  const defaultOptions = {
    credentials: 'include', // This is important for cookies to work
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  };

  const response = await fetch(url, { ...defaultOptions, ...options });
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  
  return response.json();
}

// User API functions
export const userAPI = {
  // Register a new user
  register: async (name, username, password) => {
    return apiRequest(API_ENDPOINTS.register, {
      method: 'POST',
      body: JSON.stringify({ name, username, password })
    });
  },

  // Login user
  login: async (username, password) => {
    return apiRequest(API_ENDPOINTS.login, {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
  },

  // Logout user
  logout: async () => {
    return apiRequest(API_ENDPOINTS.logout, {
      method: 'DELETE'
    });
  },

  // Check if user is logged in
  isLoggedIn: async () => {
    return apiRequest(API_ENDPOINTS.isLoggedIn);
  }
};

// Game API functions
export const gameAPI = {
  // Get all games for a user
  getGames: async (userId) => {
    const url = userId 
      ? `${API_ENDPOINTS.games}?userId=${userId}` 
      : API_ENDPOINTS.games;
    return apiRequest(url);
  },

  // Create a new game
  createGame: async (gameData) => {
    return apiRequest(API_ENDPOINTS.createGame, {
      method: 'POST',
      body: JSON.stringify(gameData)
    });
  }
};

// Health check
export const checkHealth = async () => {
  return apiRequest(API_ENDPOINTS.health);
};
