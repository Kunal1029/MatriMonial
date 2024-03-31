// userUtils.jsx

// Save user details to localStorage
export const saveUserDetails = (userData) => {
    localStorage.setItem('userDetails', JSON.stringify(userData));
  };
  
  // Retrieve user details from localStorage
  export const getUserDetails = () => {
    const userDetails = localStorage.getItem('userDetails');
    return userDetails ? JSON.parse(userDetails) : null;
  };
  
  // Update user details in localStorage
  export const updateUserDetails = (updatedUserData) => {
    const userDetails = getUserDetails();
    if (userDetails) {
      const updatedDetails = { ...userDetails, ...updatedUserData };
      localStorage.setItem('userDetails', JSON.stringify(updatedDetails));
    }
  };
  
  // Clear user details from localStorage
  export const clearUserDetails = () => {
    localStorage.removeItem('userDetails');
  };
  

  








  export const saveAdminDetails = (adminData) => {
    localStorage.setItem('adminDetails', JSON.stringify(adminData));
  };
  
  // Retrieve user details from localStorage
  export const getAdminDetails = () => {
    const adminDetails = localStorage.getItem('adminDetails');
    return adminDetails ? JSON.parse(adminDetails) : null;
  };
  
  // Update user details in localStorage
  export const updateAdminDetails = (updatedAdminData) => {
    const adminDetails = getAdminDetails();
    if (adminDetails) {
      const updatedDetails = { ...adminDetails, ...updatedAdminData };
      localStorage.setItem('adminDetails', JSON.stringify(updatedDetails));
    }
  };
  
  // Clear user details from localStorage
  export const clearAdminDetails = () => {
    localStorage.removeItem('adminDetails');
  };