require(['js/views/homeView', 'js/views/headerView', 'js/views/footerView'], function (HomeView, HeaderView, FooterView) {
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"" : "home",
			"*actions" : "home"
		},
		initialize: function() {
			this.headerView = new HeaderView();
			this.headerView.render();
			this.footerView = new FooterView();
			this.footerView.render();
		},
		home: function() {
			this.homeView = new HomeView();
		}
	});
	
	app = new ApplicationRouter();
	Backbone.history.start();	
});


