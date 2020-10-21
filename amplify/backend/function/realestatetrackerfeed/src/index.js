/* Amplify Params - DO NOT EDIT
	API_REALESTATETRACKER_GRAPHQLAPIENDPOINTOUTPUT
	API_REALESTATETRACKER_GRAPHQLAPIIDOUTPUT
	API_REALESTATETRACKER_PROPERTYTABLE_ARN
	API_REALESTATETRACKER_PROPERTYTABLE_NAME
	AUTH_REALESTATETRACKER04DC4E3F_USERPOOLID
	ENV
	REGION
	STORAGE_PROPERTIESBUCKET_BUCKETNAME
Amplify Params - DO NOT EDIT */
require("isomorphic-fetch");
const AWSAppSyncClient = require("aws-appsync").default;
const appsyncUrl = process.env.API_REALESTATETRACKER_GRAPHQLAPIENDPOINTOUTPUT;
const gql = require("graphql-tag");
const region = process.env.REGION;
const AWS = require('aws-sdk')
const chromeLambda = require("chrome-aws-lambda");
// aws-sdk is always preinstalled in AWS Lambda in all Node.js runtimes
//const S3Client = require("aws-sdk/clients/s3");

// create an S3 client
const s3 = new AWS.S3();

// default browser viewport size
const defaultViewport = {
    width: 1440,
    height: 1080
};
// aws-sdk is always preinstalled in AWS Lambda in all Node.js runtimes
// const S3Client = require("aws-sdk/clients/s3");
//
// // create an S3 client
// const s3 = new S3Client({ region: process.env.S3_REGION });

// default browser viewport size

const initializeClient = (backendTokens) => {
    console.log(backendTokens)

    return new AWSAppSyncClient({
        url: appsyncUrl,
        region: region,
        auth: {
            type: "AMAZON_COGNITO_USER_POOLS",
            jwtToken: backendTokens.AccessToken
        },
        disableOffline: true
    });
}
const getBackendTokens = async () => {
    const idp = new AWS.CognitoIdentityServiceProvider();
    const adminAuthResult = await idp.adminInitiateAuth({
        AuthFlow: "ADMIN_USER_PASSWORD_AUTH",
        ClientId: '5nnq7dcc7leg8eemc8brl5hnjn',
        UserPoolId: "eu-west-1_Exg763mZ8",
        AuthParameters: {
            "USERNAME": 'nir',
            "PASSWORD": 'password'//backendAdminCredentials.password
        }
    }).promise();

    return adminAuthResult.AuthenticationResult;
}

async function executeMutation(client, mutation, operationName, input) {
    if (!client) {
        initializeClient();
    }

    try {
        const response = await client.mutate({
            mutation: gql(mutation),
            variables: {input: input},
        });
        return response.data;
    } catch (err) {
        console.log("Error while trying to mutate data");
        //throw JSON.stringify(err);
    }
}

// async function executeQuery(client, query, nextToken) {
//     if (!client) {
//         initializeClient();
//     }
//
//     try {
//         const response = await client.query({
//             query: gql(query),
//             variables: {nextToken: nextToken},
//         });
//         return response.data;
//     } catch (err) {
//         console.log("Error while trying to query data");
//         //throw JSON.stringify(err);
//     }
// }

exports.handler = async () => {
    //const sm = new AWS.SecretsManager();
    const backendTokens = await getBackendTokens();
    const client = initializeClient(backendTokens);
    let results;
    // let nextToken = null;
    //
    // const streets = []
    // let query = `query ListStreets($filter: ModelStreetFilterInput, $limit: Int, $nextToken: String) {
    //         listStreets(filter : $filter, limit : $limit, nextToken: $nextToken) {
    //             items {
    //                 id
    //                 name
    //                 }
    //              }
    //            }`;
    //
    // results = await executeQuery(client, query, nextToken);
    // const items = results.data.listPropertys.items;
    // nextToken = results.nextToken;
    // if (items != null && items.length > 0) {
    //     for (let item of items) {
    //         streets.push(item.id)
    //     }
    // }
    const browser = await chromeLambda.puppeteer.launch({
        args: chromeLambda.args,
        executablePath: await chromeLambda.executablePath,
        defaultViewport
    });


    const page = await browser.newPage();
    await page.setCookie({
        name : 'cookie_consents',
        value : '{"schemaVersion":3,"content":{"brand":1,"consents":[{"apiVersion":1,"stored":false,"date":"2020-09-10T16:02:33.592Z","categories":[{"id":1,"consentGiven":true},{"id":3,"consentGiven":true},{"id":4,"consentGiven":true}]}]}}',
        domain : '.zoopla.co.uk',
        path : '/',
        expires : 1662826197//1631290197
    })
    await page.goto("https://www.zoopla.co.uk/for-sale/property/london/nw11/hampstead-garden-suburb-golders-green/?identifier=london%2Fnw11%2Fhampstead-garden-suburb-golders-green&q=nw11&search_source=home&radius=0");
    const links = await page.$$eval('a[class="listing-results-price text-price"]', elements => elements.filter(element => {
        // const parensRegex = /^((?!\().)*$/;
        return element.href//.includes('for-sale/details') ;//&& parensRegex.test(element.textContent);
    }).map(element => element.href.split("?")[0]));
    for (const link of links) {
        // if (streets.includes(link)) continue;
        await page.goto(link)

        const property = await page.evaluate(() => {
            const compact = document.getElementsByClassName("dp-sidebar-wrapper__summary")[0];
            return {

                street: compact.getElementsByClassName("ui-property-summary__address")[0].innerText,
                build: compact.getElementsByClassName("ui-property-summary__title")[0].innerText,
                price: compact.getElementsByClassName("ui-pricing__main-price ui-text-t4")[0].innerText
            };
        })
        if (!property.build.startsWith("bed", 2)) continue;
        const title = await page.title()
        const content = await page.content()
        const params = {
            Bucket: process.env.STORAGE_PROPERTIESBUCKET_BUCKETNAME,
            Key: `public/` + title + link.split("details/")[1] + '/page.html',
            Body: content,
            ContentType: "text/html",
            ACL: "public-read"
        }
        // upload the image using the current timestamp as filename
        await s3.putObject(params).promise();
        const propertyInput = {
            id : link,
            url: link,
            name: title,
            propertyBuildId : property.build.split(' ')[2],
            propertyRoomsId: property.build.charAt(0),
            propertyStreetId : property.street.split(',')[0],
            price: Number(property.price.replace(/[^0-9]+/g, "")),
            page: `https://${params.Bucket}.s3.${region}.amazonaws.com/${params.Key}`

        }
        results = await executeMutation(
            client,
            `mutation CreateProperty($input: CreatePropertyInput!) {
            createProperty(input: $input) {
                  id
                 }
               }`,
            "createProperty",
            propertyInput
        );
    }



    // return the uploaded image url
    return results;
};