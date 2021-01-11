// these exports are for localhost and database mysql local
var exports_1 = {
    'client-domain': '//localhost:6969/',
    'server-domain': '//localhost:3000/',
    'database': {
        'host': 'localhost',
        'port': '3306',
        'user': 'root',
        'password': 'hung9xpro',
        'database': 'web-final-1612234'
    }
}

// these exports are for localhost and database remote
var exports_2 = {
    'client-domain': '//localhost:6969/',
    'server-domain': '//localhost:3000/',
    'database': {
        'host': 'sql12.freemysqlhosting.net',
        'port': '3306',
        'user': 'sql12308370',
        'password': 'xLicY5Js7i',
        'database': 'sql12308370'
    }
}

// these exports are for uploading to heroku
var exports_3 = {
    'client-domain': 'https://btgk-1612422.herokuapp.com/',
    'server-domain': 'https://btcn06-1612422.herokuapp.com/',
    'database': {
        'host': 'td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
        'port': '3306',
        'user': 'irnr7az5e1mz410v',
        'password': 'mk78cdfpdnhbwnxo',
        'database': 'rslv4nchyp3e14oz'
    }
}

module.exports = exports_1;