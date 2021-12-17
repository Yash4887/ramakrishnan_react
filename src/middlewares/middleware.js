const logger = (store) => (next) => (action) => {
  console.log(action);
  // API Call
  next(action);
};

export default logger;
