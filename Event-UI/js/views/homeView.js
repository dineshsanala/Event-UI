define(['../.././libs/text.js!../.././templates/home.html', '../views/eventsView'], function (homeTpl, EventsView) {
	var homeView;
	homeView = Backbone.View.extend({
		el: "#content",

		template: homeTpl,

		initialize: function() {
			var self = this;
			this.render();
		},

		render: function() {
			var self = this;
			this.template = _.template( this.template );
			$(this.el).html( this.template );
			this.getGridView();
		},
		
		getGridView: function(){
			this.EventsView = new EventsView({
				viewMode : "grid"
			});
		}
	});
	return homeView;
});