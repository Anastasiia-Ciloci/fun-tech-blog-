const {
  Post
} = require('../models');

const postData = [{
    title: 'Programming',
    user_id: 3,
    post_data: 'FUUUN!'
    
  },
  {
    title: 'Blog Creator',
    user_id: 1,
    post_data: 'A blog creater is super'
  }, {
    title: 'Amazing',
    user_id: 2,
    post_data: 'cool post'
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;