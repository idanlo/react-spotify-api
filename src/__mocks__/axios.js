module.exports = {
  get: jest.fn((url, opts) => {
    return new Promise((resolve, reject) => {
      if (url) {
        if (url === "https://test.com/ApiRequest") {
          resolve({
            data: {
              url
            }
          });
        }
      } else {
        reject({ message: "Error" });
      }
    });
  })
};
