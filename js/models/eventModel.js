define(function () {
	var eventModel;
	eventModel = Backbone.Model.extend({
		defaults: {
            title: "Not specified",
            dateTime: "Not specified",
            venue: "Not specified",
            image: "Not specified"
        },

      	initialize: function(){
          	console.log("Model Instantiated.");
      	}
  	});
	return eventModel;
});