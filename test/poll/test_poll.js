'use strict';

const async = require('async');
const assert = require('assert');
const db = require('../mocks/databasemock');
const poll = require('../src/poll');

describe('Test Poll methods', () => {
    describe('poll.add()', () => {
        it('should add poll data to poll_list', (done) => {
            const pollData = {};
            
            const postData = {};
            
            const poll_list = [];
            
            poll.poll.Poll.add(pollData, postData, (err, pollId) => {
                if (err) {
                    done(err);
                } else {
                    // Check if pollId is valid
                    assert(typeof pollId === 'number' && !isNaN(pollId));
                    // Check if the poll_list array contains the added poll data
                    assert(poll_list.length === 1); // Assuming one poll has been added
                    done();
                }
            });
        });
    });
});
