export const createUser = (data, pseudo, email, message) => {
  data[pseudo] = {
    email: email,
    messages: [message]
  }
};
