// asyncHandler is a middleware function that wraps an asynchronous function and catches any unhandled promise rejections.
const asyncHandler = (fn) => (req, res, next) =>
  // Wrap the asynchronous function in a Promise and resolve it, catching any errors and passing them to the next middleware.
  Promise.resolve(fn(req, res, next)).catch(next)

export default asyncHandler
