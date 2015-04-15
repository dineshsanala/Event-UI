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

		events: {
			'click .gridClass' : 'getGridView',
			'click .listClass' : 'getListView'
		},

		getGridView: function(){
			this.EventsView = new EventsView({
				viewMode : "grid"
			});
		},

		getListView: function(){
			this.EventsView = new EventsView({
				viewMode : "list"
			});
		}
	});
	return homeView;
});