import PhoneDetailCtrl from './phone_detail.controller';
import phoneAnimation from './phone_detail.animations';

export default angular.module('phonecat.detail', ['ngRoute','phonecat.core'])
	.controller('PhoneDetailCtrl', PhoneDetailCtrl)
	.animation('.phone', phoneAnimation);