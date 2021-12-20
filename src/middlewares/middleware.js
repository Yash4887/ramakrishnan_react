const logger = () => (next) => (action) => {
  // API Call
  next(action);
};

export default logger;
