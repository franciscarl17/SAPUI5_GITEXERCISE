/*global QUnit*/

sap.ui.define([
	"zbtp/gitexercise/controller/GitView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GitView Controller");

	QUnit.test("I should test the GitView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
