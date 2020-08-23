const router = require('express').Router();
const {
  User,
  Post,
  Vote
} = require("../../models");
const withAuth = require('../../utils/auth');
const countdown = require('countdown');

let dateOfNextShowing = "";
function updateShowTime(date = new Date(2020, 7, 21, 19), day = new Date()) {
  dateOfNextShowing = date;
  console.log(dateOfNextShowing)
  // if we've passed the default date
  if (date < day) {
    let mSec = date.setDate(date.getDate() + 7)
    let newDate = new Date(mSec)
    // change the format of newDate back into the format originally passed into this function

    console.log(newDate)
    if (newDate < day) {
      updateShowTime(newDate)
    } else {
      return newDate
    }
  } else {
    return date;
  }
}
updateShowTime();

let timeLeftToVote = countdown(null, dateOfNextShowing, ~(countdown.SECONDS | countdown.MILLISECONDS)).toString();
// GET http://localhost:3001/api/users/countdown
router.get('/countdown', (req, res) => {
  let date = new Date(2020, 7, 28, 19);
  let now = new Date();
  if (date < now) {
    date.setDate(date.getDate() + 7);
  }
  let timeLeftToVote = countdown(null, date, ~(countdown.SECONDS | countdown.MILLISECONDS)).toString();

  function myFunction() {
    res.send(timeLeftToVote)
  }
  myFunction();
})


// GET http://localhost:3001/api/users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  User.findAll({
    attributes: {
      exclude: ['password']
    }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: {
      exclude: ['password']
    },
    where: {
      id: req.params.id
    },
    include: [{
      model: Post,
      attributes: ['id', 'title', 'post_url', 'created_at']
    },
    {
      model: Post,
      attributes: ['title'],
      through: Vote,
      as: 'voted_posts'
    }
    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({
          message: 'No user found with this id'
        });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  console.log(req)
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    }).catch(exception => {
      console.log(exception)
      res.status(500).json({
        message: 'Bad Request'
      });
    })
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({
        message: 'No user with that email address!'
      });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: 'Incorrect password!'
      });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({
        user: dbUserData,
        message: 'You are now logged in!'
      });
    });
  });
});

// PUT /api/users/1
router.put('/:id', withAuth, (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({
          message: 'No user found with this id'
        });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({
          message: 'No user found with this id'
        });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;