const { default: fetchGet } = require("./getFetch");

exports.Get = function (url , params , headers) {
    call(fetchGet.Get, params,headers);
}
