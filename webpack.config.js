/**
 * User: liormb
 * Date: 10/9/15
 * Time: 10:57 PM
 */

'use strict';

module.exports = {
    entry: './app-client.js',
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            { exclude: /(node_modules|app-server.js)/, loader: 'babel' }
        ]
    }
};