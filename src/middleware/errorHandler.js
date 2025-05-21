function errorHandling(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ status: 500, error: 'Internal Server Error', error: err.message });
}

export default errorHandling;
