System.register([], function(exports_1) {
    var PhoneDetailCtrl;
    return {
        setters:[],
        execute: function() {
            PhoneDetailCtrl = (function () {
                function PhoneDetailCtrl($routeParams, Phone) {
                    var _this = this;
                    this.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
                        return _this.mainImageUrl = phone.images[0];
                    });
                }
                PhoneDetailCtrl.prototype.setImage = function (url) {
                    this.mainImageUrl = url;
                };
                return PhoneDetailCtrl;
            })();
            PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];
            exports_1("default",PhoneDetailCtrl);
        }
    }
});
//# sourceMappingURL=phone_detail.controller.js.map