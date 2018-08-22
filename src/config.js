const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-16u0o1sx3jzwb"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://gnwarm90a7.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_heZ8JkRXN",
    APP_CLIENT_ID: "4s8tgk6kj3n2t9qmvotk722iqn",
    IDENTITY_POOL_ID: "us-east-1:c06c6e2b-6f35-4061-8e8a-27581ed9ccdb"
  },
  STRIPE_KEY: "pk_test_WohyPOuZdk3nrhUBnnyAbMnW"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-94abpypq4m8r"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://n8lu4tpmsg.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_MG2laLsMX",
    APP_CLIENT_ID: "5e2otqcp38acnrjmb4gadhbbf2",
    IDENTITY_POOL_ID: "us-east-1:164617ce-a612-4e04-a710-fa44f25a2850"
  },
  STRIPE_KEY: "pk_test_WohyPOuZdk3nrhUBnnyAbMnW"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
