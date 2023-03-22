const { PrismaClient } = require("@prisma/client");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const prisma = new PrismaClient();
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      console.log(jwt_payload);
      const admin = await prisma.admin.findFirst({
        where: {
          id: jwt_payload.id,
        },
      });
      if (!admin) return done(null, false);
      return done(null, admin);
    } catch (error) {
      return done(err, admin);
    }

    /*User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });*/
  })
);
