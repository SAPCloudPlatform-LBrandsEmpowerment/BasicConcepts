sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.lbrandsHelloLBrands.controller.v1", {

		onInit: function() {

			var listData = {
				data: [{
					"workbookname": "Romatic Bras",
					"templatename": "Spring 2018",
					"category": "Bras",
					"emotionalspace": "Playful Sexy"
				}, {
					"workbookname": "Performance Sports Bras",
					"templatename": "Fall 2018",
					"category": "Bras",
					"emotionalspace": "Sport"
				}]

			};
			var jModel = new sap.ui.model.json.JSONModel();

			jModel.setData(listData);

			this.getView().setModel(jModel, "local");

		},

		formatActiveEmployeeText: function(sValue) {
			if (sValue > 5) {
				return 'Active';
			} else {
				return 'Not Active';
			}
		},

		onBtnClick: function() {
			//Here comes logic
			alert(1);
		},

		onSearch: function(oEvent) {
			var searchString = oEvent.getParameter("query");
			var oTable = this.getView().byId("__table0");

			var oFilter = new sap.ui.model.Filter({
				path: "FirstName",
				operator: "Contains",
				value1: searchString
			});
			
			oTable.getBinding("items").filter([oFilter]);
			


		}

	});
});