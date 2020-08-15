// Sterilize
const sterilize = (data) => (typeof data == "string" ? data.trim() : data);
const sterilizeMany = (obj) => {
  for (const key in obj) {
    obj[key] = sterilize(obj[key]);
  }

  return obj;
};

module.exports = { sterilize, sterilizeMany };
