const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    var params = { 
        Bucket: 'demo.theresourceclan.com'
    }

    console.log("Checkpoint 1");

    let s3Objects

    try {
       s3Objects = await s3.listObjectsV2(params).promise();
       console.log(s3Objects)
    } catch (e) {
       console.log(e)
    }


    console.log("Checkpoint 2");

    // Assuming you're using API Gateway
    return {
        statusCode: 200,
        body: JSON.stringify(s3Objects || {message: 'No objects found in s3 bucket'})
    }
};