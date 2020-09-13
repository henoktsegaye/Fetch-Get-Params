const { default: fetchGet } = require("./getFetch");

exports.Get = function (url , params , headers) {
    Function.call(fetchGet.Get, url , params,headers);
}
