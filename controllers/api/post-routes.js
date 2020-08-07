const router = require('express').Router();
const { Post, User, Vote } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Post.findAll({
      attributes: ['id', 'post_url', 'title', 'created_at']
      // ,
      // include: [
      //   {
      //     model: User,
      //     attributes: ['username']
      //   }
      // ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'post_url', 'title', 'created_at']
      // ,
      // include: [
      //   {
      //     model: User,
      //     attributes: ['username']
      //   }
      // ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // POST /api/posts
router.post('/', (req, res) => {
  // expects {title: 'Forrest Gump', post_url: "https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_0"}
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  
  Post.update(req.body, {
     // individualHooks: true,
      where: {
        id: req.params.id
      }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No movie found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No movie found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  module.exports = router;
