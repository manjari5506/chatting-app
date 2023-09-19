//const host = "https://messanger-ap.herokuapp.com";
const host = "http://localhost:5000";
const loginRoute = `${host}/api/auth/login`;
const registerRoute = `${host}/api/auth/register`;
const logoutRoute = `${host}/api/auth/logout`;
const allUsersRoute = `${host}/api/auth/allusers`;
const sendMessageRoute = `${host}/api/messages/addmsg`;
const recieveMessageRoute = `${host}/api/messages/getmsg`;
const setAvatarRoute = `${host}/api/auth/setavatar`;

export {
  host,
  loginRoute,
  registerRoute,
  logoutRoute,
  allUsersRoute,
  sendMessageRoute,
  recieveMessageRoute,
  setAvatarRoute,
};
