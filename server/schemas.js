/* global exports */

exports.schemas = [{
  name: 'users',
  properties: {}
}, {
  name: 'userProviderAccounts',
  properties: {
    username: {
      type: String
    }, // Assigned by us
    provider: {
      type: String,
      enum: ['google', 'twitter', 'facebook'],
      required: true
    },
    idWithProvider: {
      type: String,
      required: true
    }, // Assigned by the provider
    emails: [{
      type: String
    }],
    displayName: {
      type: String
    },
    oauthToken: {
      type: String
    },
    oauthSecret: {
      type: String
    },
    tokenExpirationDate: {
      type: Date
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}, {
  name: 'articles',
  properties: {
    app: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    lastAuthor: {
      type: String
    },
    acl: [{
      grantee: {
        type: String,
        required: true
      },
      rights: [{
        type: String,
        required: true
      }]
    }],
    content: {
      type: String
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
  }
}];