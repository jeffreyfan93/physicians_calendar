var express = require('express');
var router = express.Router();

const physicians = {
    'Hibbert, Julius': {
        'firstName': 'Julius',
        'lastName': 'Hibbert',
        'email': 'hibbert@notablehealth.com',
        'patients': [
            {
                name: 'Sterling Archer',
                time: '8:00AM',
                kind: 'New Patient'
            },
            {
                name: 'Cyril Figis',
                time: '8:30AM',
                kind: 'Follow-up'
            },
            {
                name: 'Ray Gilette',
                time: '9:00AM',
                kind: 'Follow-up'
            },
            {
                name: 'Lana Kane',
                time: '9:30AM',
                kind: 'New Patient'
            },
            {
                name: 'Pam Poovey',
                time: '10:00AM',
                kind: 'New Patient'
            }
        ]
    },
    'Krieger, Algernop': {
        'firstName': 'Algernop',
        'lastName': 'Krieger',
        'email': 'krieger@notablehealth.com',
        'patients': [
            {
                name: 'Patient One',
                time: '8:30AM',
                kind: 'Follow-up'
            },
            {
                name: 'Patient Two',
                time: '9:00AM',
                kind: 'Follow-up'
            },
            {
                name: 'Patient Three',
                time: '9:30AM',
                kind: 'New Patient'
            },
            {
                name: 'Patient Four',
                time: '10:00AM',
                kind: 'New Patient'
            }
        ]
    },
    'Riviera, Nick': {
        'firstName': 'Nick',
        'lastName': 'Riviera',
        'email': 'riviera@notablehealth.com',
        'patients': [
            {
                name: 'Patient Five',
                time: '9:00AM',
                kind: 'Follow-up'
            },
            {
                name: 'Patient Six',
                time: '9:30AM',
                kind: 'New Patient'
            },
            {
                name: 'Patient Seven',
                time: '10:00AM',
                kind: 'New Patient'
            }
        ]
    }
};

router.get('/', function(req, res, next) {
    if (req.query.name) {
        res.send(physicians[req.query.name])
    } else {
        res.send(Object.keys(physicians));
    }
});

module.exports = router;
