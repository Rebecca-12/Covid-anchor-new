const Story = require("../dbSchema");
const updateStory = require("../domain/updateStory");

/**
 * This is a handler for updating a single story
 * @param {*} req
 * @param {*} res
 */
const handleUpdateStory = async (req, res) => {
  const { id } = req.params;
  const update = updateStory(req.body);
  console.log(update);
  const updatedStory = await Story.findByIdAndUpdate(id, update, { new: true });

  // Sending Story
  res.status(200).json({
    data: updatedStory,
    error: { code: null, message: null },
  });
};

module.exports = handleUpdateStory;
