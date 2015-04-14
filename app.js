require(['js/views/homeView', 'js/views/headerView', 'js/views/footerView', 'js/views/detailsView'], function (HomeView, HeaderView, FooterView, DetailsView) {
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"" : "home",
			"specificEventView(/:modelId)" : "specificEventDisplay"
		},
		initialize: function() {
			this.headerView = new HeaderView();
			this.headerView.render();
			
		},
		home: function() {
			this.homeView = new HomeView();
		},
		specificEventDisplay: function(modelId){
			app.modelId=modelId;
			this.DetailsView = new DetailsView();
		}
	});
	
	app = new ApplicationRouter();
	Backbone.history.start();	
});


