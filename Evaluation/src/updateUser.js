export const updateUser = (data, pseudo, email, message) => {
  if (data[pseudo]) {
    let messageAlreadyExists = false;

    data[pseudo].messages.forEach(entry => {
      if (entry === message) {
        messageAlreadyExists = true;
      }
    });

    if (!messageAlreadyExists) {
      data[pseudo].messages.unshift(message);
    }

    if (data[pseudo].email !== email) {
      data[pseudo].email = email;
      console.log(`E-mail de l'utilisateur ${pseudo} mis à jour.`);
    }

  } else {
    data[pseudo] = {
      email: email,
      messages: [message]
    }
  }
};
