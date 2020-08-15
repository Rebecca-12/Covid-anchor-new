const { sterilizeMany } = require("../../shared/sterilize");

// Is not a String
const notAString = (data) => data && typeof data !== "string";

// Validate
const validateStory = (unvalidatedStory) => {
  let errMgs = "";
  let data = sterilizeMany(unvalidatedStory);
  const msg = "must be alpha-numeric. ";

  console.log("Unvalidated: ", typeof data.content);

  if (notAString(data.title)) errMgs += `Title ${msg}`;
  if (data.content && typeof data.content !== "string")
    errMgs += `Content ${msg}`;
  if (notAString(data.image)) errMgs += `Image ${msg}`;

  // Prepare validate
  return { data, isValid: errMgs.length < 1, message: errMgs };
};

// Create a update story
const updateStory = (unvalidateStory) => {
  // Validate Story
  const { data, isValid, message } = validateStory(unvalidateStory);

  // Check if data is valid
  if (isValid) {
    const update = {};

    if (data.title) update.title = data.title;
    if (data.content) update.content = data.content;
    if (data.image) update.image = data.image;

    return { tag: "passed", data: update };
  }

  // Return Story
  return { tag: "failed", message };
};

module.exports = updateStory;
