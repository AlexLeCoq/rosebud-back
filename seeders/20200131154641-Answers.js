module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('Answers', [{
      id: 1,
      QuestionId: 1,
      ParticipantId: 1,
      comment: 'Réponse 1',
      image_url: '/uploads/1580484654849answerImage0_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 2,
      QuestionId: 2,
      ParticipantId: 1,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 3,
      QuestionId: 3,
      ParticipantId: 1,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 4,
      QuestionId: 4,
      ParticipantId: 1,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 5,
      QuestionId: 1,
      ParticipantId: 2,
      comment: 'Réponse 1',
      image_url: '/uploads/1580484654849answerImage0_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 6,
      QuestionId: 2,
      ParticipantId: 2,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 7,
      QuestionId: 3,
      ParticipantId: 2,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 8,
      QuestionId: 4,
      ParticipantId: 2,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 9,
      QuestionId: 1,
      ParticipantId: 3,
      comment: 'Réponse 1',
      image_url: '/uploads/1580484654849answerImage0_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 10,
      QuestionId: 2,
      ParticipantId: 3,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 11,
      QuestionId: 3,
      ParticipantId: 3,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 12,
      QuestionId: 4,
      ParticipantId: 3,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 13,
      QuestionId: 5,
      ParticipantId: 4,
      comment: 'Réponse 1',
      image_url: '/uploads/a0bc85409d7bf361b341c6bed7199d61',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 14,
      QuestionId: 6,
      ParticipantId: 4,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 15,
      QuestionId: 7,
      ParticipantId: 4,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 16,
      QuestionId: 8,
      ParticipantId: 4,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 17,
      QuestionId: 5,
      ParticipantId: 5,
      comment: 'Réponse 1',
      image_url: '/uploads/a0bc85409d7bf361b341c6bed7199d61',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 18,
      QuestionId: 6,
      ParticipantId: 5,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 19,
      QuestionId: 7,
      ParticipantId: 5,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 20,
      QuestionId: 8,
      ParticipantId: 5,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 21,
      QuestionId: 5,
      ParticipantId: 6,
      comment: 'Réponse 1',
      image_url: '/uploads/a0bc85409d7bf361b341c6bed7199d61',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 22,
      QuestionId: 6,
      ParticipantId: 6,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 23,
      QuestionId: 7,
      ParticipantId: 6,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 24,
      QuestionId: 8,
      ParticipantId: 6,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('Answers', [{
      id: 1,
      QuestionId: 1,
      ParticipantId: 1,
      comment: 'Réponse 1',
      image_url: '/uploads/1580484654849answerImage0_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 2,
      QuestionId: 2,
      ParticipantId: 1,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 3,
      QuestionId: 3,
      ParticipantId: 1,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 4,
      QuestionId: 4,
      ParticipantId: 1,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 5,
      QuestionId: 1,
      ParticipantId: 2,
      comment: 'Réponse 1',
      image_url: '/uploads/1580484654849answerImage0_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 6,
      QuestionId: 2,
      ParticipantId: 2,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 7,
      QuestionId: 3,
      ParticipantId: 2,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 8,
      QuestionId: 4,
      ParticipantId: 2,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 9,
      QuestionId: 1,
      ParticipantId: 3,
      comment: 'Réponse 1',
      image_url: '/uploads/1580484654849answerImage0_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 10,
      QuestionId: 2,
      ParticipantId: 3,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 11,
      QuestionId: 3,
      ParticipantId: 3,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 12,
      QuestionId: 4,
      ParticipantId: 3,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 13,
      QuestionId: 5,
      ParticipantId: 4,
      comment: 'Réponse 1',
      image_url: '/uploads/a0bc85409d7bf361b341c6bed7199d61',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 14,
      QuestionId: 6,
      ParticipantId: 4,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 15,
      QuestionId: 7,
      ParticipantId: 4,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 16,
      QuestionId: 8,
      ParticipantId: 4,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 17,
      QuestionId: 5,
      ParticipantId: 5,
      comment: 'Réponse 1',
      image_url: '/uploads/a0bc85409d7bf361b341c6bed7199d61',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 18,
      QuestionId: 6,
      ParticipantId: 5,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 19,
      QuestionId: 7,
      ParticipantId: 5,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 20,
      QuestionId: 8,
      ParticipantId: 5,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),

    queryInterface.bulkInsert('Answers', [{
      id: 21,
      QuestionId: 5,
      ParticipantId: 6,
      comment: 'Réponse 1',
      image_url: '/uploads/a0bc85409d7bf361b341c6bed7199d61',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 22,
      QuestionId: 6,
      ParticipantId: 6,
      comment: 'Réponse 2',
      image_url: '/uploads/1580484654851answerImage1_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 23,
      QuestionId: 7,
      ParticipantId: 6,
      comment: 'Réponse 3',
      image_url: '/uploads/1580484654866answerImage2_small.jpg',
    }]),
    queryInterface.bulkInsert('Answers', [{
      id: 24,
      QuestionId: 8,
      ParticipantId: 6,
      comment: 'Réponse 4',
      image_url: '/uploads/1580484654885answerImage3_small.jpg',
    }]),
  ]),
};