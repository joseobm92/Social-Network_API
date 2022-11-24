const { Thought, Reaction } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.userId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No post with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new post
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate()
  },

  deleteThought(req, res) {
    Thought.deleteOne()
  },

  createReaction(req,res) {
    Reaction.create()
  },

  deleteReaction(req,res) {
    Reaction.deleteOne()
  }
};