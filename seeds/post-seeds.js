const {
  Post
} = require('../models');

const postData = [{
  title: 'Jaws',
  post_url: "https://www.imdb.com/title/tt0073195/?ref_=fn_al_tt_1",
  },
  {
    title: 'Anaconda',
    post_url: "https://www.imdb.com/title/tt0118615/?ref_=nv_sr_srsg_0",
  },
  {
    title: 'Casper',
    post_url: "https://www.imdb.com/title/tt0112642/?ref_=nv_sr_srsg_3",
  },
  {
    title: 'Forrest Gump',
    post_url: "https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_0",
  },
  {
    title: 'Idiocracy',
    post_url: "https://www.imdb.com/title/tt0387808/?ref_=nv_sr_srsg_0",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;