'use strict';

const addUser = require('./handlers/create');
const viewUser = require('./handlers/view');
const listUsers = require('./handlers/list');
const removeUser = require('./handlers/remove');

const create = (event, context, callback) => {
    const data = JSON.parse(event.body);
    addUser(data)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};

const list = (event, context, callback) => {
    listUsers()
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};

const view = (event, context, callback) => {
    viewUser(event.pathParameters.id)
        .then(result => {
            const response = { body: JSON.stringify(result) };
            callback(null, response);
        })
        .catch(callback);
};


const remove = (event, context, callback) => {
    removeUser(event.pathParameters.id)
        .then(result => {
            const response = { body: JSON.stringify({message: 'User removed.'}) };
            callback(null, response);
        })
        .catch(callback);
};


module.exports = {
    create,
    view,
    remove,
    list
};
