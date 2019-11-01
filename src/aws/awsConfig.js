const graphQLEndPoint = process.env.REACT_APP_GRAPHQL_URL;
const awsSyncKey = process.env.REACT_APP_SYNC_KEY;
const awsIdentityPoolId = process.env.REACT_APP_IDENTITY_POOL_ID;
const awsPoolId = process.env.REACT_APP_POOL_ID;
const awsWebClientId = process.env.REACT_APP_WEB_CLIENT_ID;
const oauthDomain = process.env.REACT_APP_OAUTH_DOMAIN;

export const loadConfig = () => {
    console.log(graphQLEndPoint);
    const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
    );
    const url = isLocalhost ? "http://localhost:3000/" : "https://www.shanepreater.dev/";

    return {
        "aws_project_region": "eu-west-2",
        "aws_appsync_graphqlEndpoint": graphQLEndPoint,
        "aws_appsync_region": "eu-west-2",
        "aws_appsync_authenticationType": "API_KEY",
        "aws_appsync_apiKey": awsSyncKey,
        "aws_cognito_identity_pool_id": awsIdentityPoolId,
        "aws_cognito_region": "eu-west-2",
        "aws_user_pools_id": awsPoolId,
        "aws_user_pools_web_client_id": awsWebClientId,
        "oauth": {
            "domain": oauthDomain,
            "scope": [
                "phone",
                "email",
                "openid",
                "profile",
                "aws.cognito.signin.user.admin"
            ],
            "redirectSignIn": url,
            "redirectSignOut": url,
            "responseType": "code"
        },
        "federationTarget": "COGNITO_USER_POOLS"
    };
};