const validateEmail = (email) =>
  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email);

export default validateEmail;