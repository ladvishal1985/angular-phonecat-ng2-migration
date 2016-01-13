System.register([], function(exports_1) {
    var PhoneListCtrl;
    return {
        setters:[],
        execute: function() {
            PhoneListCtrl = (function () {
                function PhoneListCtrl(phones) {
                    var _this = this;
                    phones.query().subscribe(function (phones) {
                        _this.phones = phones;
                    });
                    this.orderProp = 'age';
                }
                return PhoneListCtrl;
            })();
            PhoneListCtrl.$inject = ['phones'];
            exports_1("default",PhoneListCtrl);
        }
    }
});
//# sourceMappingURL=phone_list.controller.js.map