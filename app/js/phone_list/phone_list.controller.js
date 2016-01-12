System.register([], function(exports_1) {
    var PhoneListCtrl;
    return {
        setters:[],
        execute: function() {
            PhoneListCtrl = (function () {
                function PhoneListCtrl(Phone) {
                    this.phones = Phone.query();
                    this.orderProp = 'age';
                }
                return PhoneListCtrl;
            })();
            PhoneListCtrl.$inject = ['Phone'];
            exports_1("default",PhoneListCtrl);
        }
    }
});
//# sourceMappingURL=phone_list.controller.js.map