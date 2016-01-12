System.register([], function(exports_1) {
    function PhoneDetailCtrl($routeParams, Phone) {
        var vm = this;
        vm.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
            vm.mainImageUrl = phone.images[0];
        });
        vm.setImage = function (imageUrl) {
            vm.mainImageUrl = imageUrl;
        };
    }
    return {
        setters:[],
        execute: function() {
            PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];
            exports_1("default",PhoneDetailCtrl);
        }
    }
});
//# sourceMappingURL=phone_detail.controller.js.map