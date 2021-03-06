var keytar = keytar = require('keytar')

var tokenName = 'Github.com API Token'

module.exports = {
  // Get the Github API token from the keychain.
  getToken: function () {
    var token = keytar.findPassword(tokenName)
    if (!token) {
      token = process.env.GITHUB_ACCESS_TOKEN
    }
    if (!token) {
      console.error('No Github API token in keychain\n' +
        'Run `sketch-builder login` or set the `GITHUB_ACCESS_TOKEN` environment variable.'
      )
      process.exit(1)
    }

    return token
  },
  // Save the given token to the keychain.
  //
  // token - A string token to save.
  saveToken: function (token) {
    keytar.replacePassword(tokenName, 'github.com', token)
  },

  deleteToken: function () {
    keytar.deletePassword(tokenName, 'github.com')
  }
}
