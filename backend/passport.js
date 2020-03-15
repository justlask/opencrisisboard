/**
 * module dependencies for passport configuration
 */
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// controllers
const getUser = require('./entities/user/controller').getUser;
const signInViaTwitter = require('./entities/user/controller').signInViaTwitter;
const signInViaFacebook = require('./entities/user/controller').signInViaFacebook;

// create credentials
const FB_APPID = require('../config/credentials').FB_APPID;
const FB_CBURL = require('../config/credentials').FB_CBURL;
const FB_SECRET = require('../config/credentials').FB_SECRET;

// create credentials
const TW_APPID = require('../config/credentials').TW_APPID;
const TW_CBURL = require('../config/credentials').TW_CBURL;
const TW_SECRET = require('../config/credentials').TW_SECRET;

/**
 * passport configuration
 */
const passportConfig = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    // try/catch
    try {
      // get user
      const user = await getUser(id);

      // check user
      done(null, user);
    } catch (e) {
      done(e);
    }
  });

  // create facebook
  if (FB_APPID && FB_SECRET) {
    // create new facebook strategy
    passport.use(new FacebookStrategy({
      clientID: FB_APPID,
      callbackURL: FB_CBURL,
      clientSecret: FB_SECRET,
    }, async (accessToken, refreshToken, profile, done) => {

      // try/catch
      try {
        // get user
        const user = await signInViaFacebook(profile);

        // check user
        console.log('got the user'); done(null, user);
      } catch (e) {
        console.log('something error occurs'); done(error);
      }
    }));
  }

  // create facebook
  if (TW_APPID && TW_SECRET) {
    // create new facebook strategy
    passport.use(new FacebookStrategy({
      consumerKey: TW_APPID,
      callbackURL: TW_CBURL,
      consumerSecret: TW_SECRET,
    }, async (accessToken, refreshToken, profile, done) => {

      // try/catch
      try {
        // get user
        const user = await signInViaTwitter(profile);

        // check user
        console.log('got the user'); done(null, user);
      } catch (e) {
        console.log('something error occurs'); done(error);
      }
    }));
  }
};

module.exports = passportConfig;
