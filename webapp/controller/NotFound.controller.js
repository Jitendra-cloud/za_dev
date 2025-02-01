sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("djp.fullscreen.zadevelopingfullscreenapp.controller.NotFound", {
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        onNavBack: function () {
            var oHistory, sPreviousHash;

            oHistory = sap.ui.core.routing.History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("overview", true /*no history*/);
            }
        }
    });
});