/* global exports */

exports.schemas = [{
  name: 'users',
  properties: {}
}, {
  // Stores registered apps. We try to store the minimum amount of information
  // for the apps: just those things that cannot be set by the app's server
  // for security reasons.
  name: 'apps',
  properties: {
    appKey: {
      // e.g. "definibus"
      type: String,
      required: true
    },
    serverDomain: {
      // e.g. "definibus.airbender.dev:9000"
      type: String,
      required: true
    },
    tokens: [{
      value: {
        // The value of the token, e.g. "zYJ7Wff9c5Kx6A5rEKhMjVLLVVGJqSUGEabG"
        type: String,
        required: true
      },
      expires: {
        // A mongo date until when this token is valid.
        type: Date
      }
    }]
  }
}, {
  name: 'userProviderAccounts',
  properties: {
    username: {
      type: String
    }, // Assigned by us
    appKey: {
      // e.g. "definibus"
      type: String,
      required: true
    },
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
    appKey: {
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