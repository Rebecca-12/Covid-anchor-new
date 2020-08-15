const express = require("express");

// Importing Handlers
const handleCreateStory = require("./handlers/handleCreateStory");
const handleFindStories = require("./handlers/handleFindStories");
const handleFindStory = require("./handlers/handleFindStory");
const handleDeleteStory = require("./handlers/handleDeleteStory");
const handleUpdateStory = require("./handlers/handleUpdateStory");

// Creating a story route
const storyRoute = express.Router();

// Defining Stories Routes
storyRoute.post("/", handleCreateStory);
storyRoute.get("/", handleFindStories);
storyRoute.get("/:id", handleFindStory);
storyRoute.patch("/:id", handleUpdateStory);
storyRoute.delete("/:id", handleDeleteStory);

// Exporting storyRoute
module.exports = storyRoute;
