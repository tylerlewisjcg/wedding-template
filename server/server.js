require("dotenv").config()
const express = require('express'),
bodyParser = require('body-parser'),
session = require('express-session'),
passport = require('passport'),
massive = require('massive'),
Auth0Strategy = require('passport-auth0');

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING,
    SUCCESS_REDIRECT,
    FAILURE_REDIRECT,
    REDIRECT_URL
  } = process.env;


  const app = express();
  app.use(bodyParser.json());

  massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("All I Do Is Win Win Win No Matter What");
  })
  .catch(err => console.log(err));


  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: SESSION_SECRET
    })
  );



  
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: "openid profile "
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      const db = app.get("db");
      db.users_DB.find_user([profile.id]).then(userResult => {
        if (!userResult[0]) {
          db.users_DB
            .create_user([profile.displayName, profile.id, profile.picture])
            .then(createdUser => {
              return done(null, createdUser[0].id);
            })
            .catch(err => console.log(err));
        } else {
          return done(null, userResult[0].id);
        }
      });
    }
  )
);

passport.serializeUser((id, done) => {
  done(null, id);
});
passport.deserializeUser((id, done) => {
  app
    .get("db")
    .users_DB.find_session_user([id])
    .then(loggedInUser => {
      done(null, loggedInUser[0]);
    })
    .catch(err => console.log(err));
});

app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: SUCCESS_REDIRECT,
    failureRedirect: FAILURE_REDIRECT
  })
);

app.get("/auth/me", function(req, res) {
  if (!req.user) {
    res.sendStatus(401);
  } else {
    res.status(200).send(req.user);
  }
});

app.get('/auth/logout', (req, res) => {
  req.logOut();
  return res.redirect(FAILURE_REDIRECT);
})

/////////   Comments Section Endpoints /////////

//// Create Comment ////


//// Get Comments ////



//////   RSVP //////


///// TWILIO????/////
//// might be able to do calling twilio api on the front end







app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));