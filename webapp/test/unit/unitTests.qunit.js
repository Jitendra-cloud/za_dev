/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"djpfullscreen/za_developing_full_screen_app/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});