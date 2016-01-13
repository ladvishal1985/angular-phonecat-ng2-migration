System.register([], function(exports_1) {
    var PhoneDetailCtrl;
    return {
        setters:[],
        execute: function() {
            PhoneDetailCtrl = (function () {
                function PhoneDetailCtrl($routeParams, phones) {
                    var _this = this;
                    phones.get($routeParams.phoneId).subscribe(function (phone) {
                        _this.phone = phone;
                        _this.mainImageUrl = phone.images[0];
                    });
                }
                PhoneDetailCtrl.prototype.setImage = function (url) {
                    this.mainImageUrl = url;
                };
                return PhoneDetailCtrl;
            })();
            PhoneDetailCtrl.$inject = ['$routeParams', 'phones'];
            exports_1("default",PhoneDetailCtrl);
        }
    }
});
//# sourceMappingURL=phone_detail.controller.js.map