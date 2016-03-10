/*global require, module*/

var exec = require('cordova/exec')

var ShellExec = function () {
    
    exec(this.successCallback, this.errorCallback, "", "", [this.params]);

};

module.exports = ShellExec;
