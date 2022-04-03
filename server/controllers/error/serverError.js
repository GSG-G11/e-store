module.exports = (err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json({
      status: err.status || 500,
      message: err.status ? err.message : 'Internal Server Error',
    });
};
