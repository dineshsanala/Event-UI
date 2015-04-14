define(['../.././libs/text.js!../.././templates/details.html'], function (detailsTpl) {
	var detailsView;
	detailsView = Backbone.View.extend({
		el: "#content",

		template: detailsTpl,

		initialize: function() {
			var self = this;
			$.getJSON( "../../data.json", function( Data ) {
				self.data = Data.Events;
				self.render(app.modelId);
			});
		},

		render: function(modelId) {
			var self = this;
			self.currentModel = self.data[ parseInt(modelId.split(':')[1]) ];
			this.template = _.template( this.template );
			$(this.el).html( this.template( { model : self.currentModel } ) );
		},

		events: {
			'click .backBtn': 'goBack'
		},

		goBack: function(event, ui){
			Backbone.history.navigate("", true);
		}
	});
	return detailsView;
});