System.register([], function(exports_1) {
    function PhoneListCtrl(Phone) {
        var vm = this;
        vm.phones = Phone.query();
        vm.orderProp = 'age';
    }
    return {
        setters:[],
        execute: function() {
            PhoneListCtrl.$inject = ['Phone'];
            exports_1("default",PhoneListCtrl);
        }
    }
});
//# sourceMappingURL=phone_list.controller.js.map