const { Post } = require('../models');

const postdata = [
  {
    title: 'John Smith',
    post_url: '50 Masks - $15.99',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
