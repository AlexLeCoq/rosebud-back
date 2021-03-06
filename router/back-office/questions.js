const express = require('express');
const { Question } = require('../../models');
const { isAuthenticated } = require('../../utils/jwt.utils');

const router = express.Router();

// GET ALL QUESTIONS
router.get('/', isAuthenticated, async (req, res) => {
  const { QuestionnaireId } = req.query;
  const { count } = await Question.findAndCountAll();
  const questions = await Question.findAll(QuestionnaireId && { where: { QuestionnaireId } });
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.header('X-Total-Count', count);
  res.send(questions);
});

// GET QUESTION BY ID
router.get('/:id', isAuthenticated, async (req, res) => {
  const { id } = req.params;
  const question = await Question.findAll({ where: { id } });
  res.send(question);
});

// CREATE QUESTION
router.post('/', isAuthenticated, async (req, res) => {
  const {
    title, uploadFormat, QuestionnaireId,
  } = req.body;
  const question = await Question.create({
    title,
    QuestionnaireId,
    uploadFormat,
  });
  res.status(200).send({ question });
});

// PUT QUESTION BY ID
router.put('/:id', isAuthenticated, async (req, res) => {
  const { title, uploadFormat, QuestionnaireId } = req.body;
  await Question.update(
    { title, uploadFormat, QuestionnaireId },
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.json({ status: 'Question Updated!' });
    });
});

// DELETE QUESTION BY ID
router.delete('/:id', async (req, res) => {
  await Question.destroy(
    { where: { id: req.params.id } },
  )
    .then(() => {
      res.json({ status: 'Question Deleted!' });
    });
});

module.exports = router;
