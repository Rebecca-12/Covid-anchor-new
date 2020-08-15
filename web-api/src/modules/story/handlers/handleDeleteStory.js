const Story = require("../dbSchema");

/**
 * This is a handler for deleting a story
 * @param {*} req
 * @param {*} res
 */
const handleDeleteStory = async (req, res) => {
  const { id } = req.params;
  const deleteStory = await Story.findByIdAndDelete(id);

  // Sending Story
  res.status(200).json({
    data: deleteStory,
    error: { code: null, message: null },
  });
};

module.exports = handleDeleteStory;
