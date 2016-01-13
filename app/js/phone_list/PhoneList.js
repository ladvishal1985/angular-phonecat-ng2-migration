System.register(['angular2/core', '../core/Phones', './PhoneFilterPipe', './OrderByPipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Phones_1, PhoneFilterPipe_1, OrderByPipe_1;
    var PhoneListCtrl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            },
            function (PhoneFilterPipe_1_1) {
                PhoneFilterPipe_1 = PhoneFilterPipe_1_1;
            },
            function (OrderByPipe_1_1) {
                OrderByPipe_1 = OrderByPipe_1_1;
            }],
        execute: function() {
            PhoneListCtrl = (function () {
                function PhoneListCtrl(phones) {
                    this.phones = phones.query();
                    this.orderProp = 'age';
                }
                PhoneListCtrl = __decorate([
                    core_1.Component({
                        selector: 'pc-phone-list',
                        templateUrl: 'js/phone_list/phone_list.html',
                        pipes: [PhoneFilterPipe_1.default, OrderByPipe_1.default]
                    }), 
                    __metadata('design:paramtypes', [Phones_1.Phones])
                ], PhoneListCtrl);
                return PhoneListCtrl;
            })();
            PhoneListCtrl.$inject = ['phones'];
            exports_1("default",PhoneListCtrl);
        }
    }
});
//# sourceMappingURL=PhoneList.js.map