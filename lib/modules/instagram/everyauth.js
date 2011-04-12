var Promise = require('everyauth').Promise;

// Defaults

module.exports = {
  findOrCreateUser: function (sess, accessTok, hipster) {
    var promise = new Promise()
      , self = this;
    // TODO Check user in session or request helper first
    //      e.g., req.user or sess.auth.userId
    this.User()().findOne({'instagram.id': hipster.id}, function (err, foundUser) {
      if (foundUser)
        return promise.fulfill(foundUser);
      self.User()().createWithInstagram(hipster, accessTok, function (err, createdUser) {
        return promise.fulfill(createdUser);
      });
    });
  }
};