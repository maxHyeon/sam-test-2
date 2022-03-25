const express = require('express');
let response;

exports.lambdaHandler = async (event, context) => {
    try {
        const app = express();

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world-without stack set',
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
