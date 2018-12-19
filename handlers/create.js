'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = (data) => {
    const params = {
        TableName: 'users',
        Item: {
            name: data.name,
            age: data.age,
            id: uuid.v1(),
        }
    };
    return dynamoDb.put(params).promise()
        .then(result => params.Item)
};
