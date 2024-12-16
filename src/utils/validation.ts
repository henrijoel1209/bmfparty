export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+225\s?0[0-9]{9}$/;
  return phoneRegex.test(phone);
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};