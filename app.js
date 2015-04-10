require(['libs/text!header.html', 'libs/text!home.html', 'libs/text!footer.html'], function (headerTpl, homeTpl, footerTpl) {
	
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": "home",
			"*actions": "home"
		},
		initialize: function() {
			this.headerView = new HeaderView();
			this.headerView.render();
			this.footerView = new FooterView();
			this.footerView.render();
		},
		home: function() {
			this.homeView = new HomeView();
			//this.homeView.render();
		}
	});

	HeaderView = Backbone.View.extend({
		el: "#header",

		templateFileName: "header.html",

		template: headerTpl,

		initialize: function() {
			// $.get(this.templateFileName, function(data){console.log(data);this.template=data});		
		},

		render: function() {
			$(this.el).html(_.template(this.template));
		}
	});

	FooterView = Backbone.View.extend({
		el: "#footer",

		template: footerTpl,

		render: function() {
			this.$el.html(_.template(this.template));
		}
	})
	HomeView = Backbone.View.extend({
		el: "#content",

		template: homeTpl,

		initialize: function() {
			var self = this;
            var event1 = new Event({ 
				tittle: "Anual Meet.", 
				dateTime: "April 1st 2015, 10:00 AM.", 
				venue: "Central auditorium.", 
				image:"/img/1.jpg",
				caption:"Random",
				description:"Random"
			});
			var event2 = new Event({ 
				tittle: "Team trek.", 
				dateTime: "April 10th 2015, 05:00 PM.", 
				venue: "Drive Inn Place.", 
				image:"/img/2.jpg" ,
				caption:"Random",
				description:"Random"
			});
			var event3 = new Event({ 
				tittle: "Anual Meet.", 
				dateTime: "Jan 26th 2015, 11:00 AM.", 
				venue: "Skill Development Workshop.", 
				image:"/img/3.jpg",
				caption:"Random",
				description:"Random"
			});
			var event4 = new Event({ 
				tittle: "Team trek.", 
				dateTime: "April 10th 2015, 05:00 PM.", 
				venue: "Drive Inn Place.", 
				image:"/img/4.jpg",
				caption:"Random",
				description:"Random"
			});
			var event5 = new Event({ 
				tittle: "Anual Meet.", 
				dateTime: "April 1st 2015, 10:00 AM.", 
				venue: "Central auditorium.", 
				image:"/img/1.jpg",
				caption:"Random",
				description:"Random"
			});
			var event6 = new Event({ 
				tittle: "Team trek.", 
				dateTime: "April 10th 2015, 05:00 PM.", 
				venue: "Drive Inn Place.", 
				image:"/img/2.jpg",
				caption:"Random",
				description:"Random"
			});
			var event7 = new Event({ 
				tittle: "Anual Meet.", 
				dateTime: "April 1st 2015, 10:00 AM.", 
				venue: "Central auditorium.", 
				image:"/img/1.jpg",
				caption:"Random",
				description:"Random"
			});
			var event8 = new Event({ 
				tittle: "Team trek.", 
				dateTime: "April 10th 2015, 05:00 PM.", 
				venue: "Drive Inn Place.", 
				image:"/img/2.jpg",
				caption:"Random",
				description:"Random"
			});
			var event9 = new Event({ 
				tittle: "Anual Meet.", 
				dateTime: "April 1st 2015, 10:00 AM.", 
				venue: "Central auditorium.", 
				image:"/img/1.jpg",
				caption:"Random",
				description:"Random"
			});
			this.myEvents = new Events([ event1, event2, event3, event4, event5, event6, event7, event8, event9]);
			self.render() ;
		},

		render: function() {
			var self = this;
			this.template = _.template( this.template );
			$(this.el).html( this.template( {Events : self.myEvents.models} ) );
			//console.log($(this.el).find(".pics"));
		},

		events: {
			'mouseenter .imageParents': 'hoverFunction',
			'mouseleave .imageParents': 'hoverOutFunction'
		},

		hoverFunction: function(event, ui){
			event.target.parentElement.childNodes[1].style.display="block";
		},

		hoverOutFunction: function(event, ui){
			event.target.parentElement.childNodes[1].style.display="none";
		}
	});

	Event = Backbone.Model.extend({
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

  	Events = Backbone.Collection.extend({
    	model: Event
  	});
	
	
	app = new ApplicationRouter();
	Backbone.history.start();	
});


