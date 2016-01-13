System.register(['angular2/core', '../core/Phones', '../core/CheckmarkPipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, Phones_1, CheckmarkPipe_1;
    var PhoneDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            },
            function (CheckmarkPipe_1_1) {
                CheckmarkPipe_1 = CheckmarkPipe_1_1;
            }],
        execute: function() {
            PhoneDetail = (function () {
                function PhoneDetail($routeParams, phones) {
                    var _this = this;
                    this.phone = undefined;
                    phones.get($routeParams.phoneId)
                        .subscribe(function (phone) {
                        _this.phone = phone;
                        _this.mainImageUrl = phone.images[0];
                    });
                }
                PhoneDetail.prototype.setImage = function (url) {
                    this.mainImageUrl = url;
                };
                PhoneDetail = __decorate([
                    core_1.Component({
                        selector: 'pc-phone-detail',
                        templateUrl: 'js/phone_detail/phone_detail.html',
                        pipes: [CheckmarkPipe_1.CheckmarkPipe]
                    }),
                    __param(0, core_1.Inject('$routeParams')), 
                    __metadata('design:paramtypes', [Object, Phones_1.Phones])
                ], PhoneDetail);
                return PhoneDetail;
            })();
            exports_1("default",PhoneDetail);
        }
    }
});
//# sourceMappingURL=PhoneDetail.js.map