define(['../.././libs/text.js!../.././templates/home.html', '.././models/eventModel', '.././collections/eventsCollection'], function (homeTpl, Event, Events) {
	var homeView;
	homeView = Backbone.View.extend({
		el: "#content",

		template: homeTpl,

		initialize: function() {
			var self = this;
			this.model = Event;
			this.collection = Events;
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
				image:"/img/5.jpg",
				caption:"Random",
				description:"Random"
			});
			var event6 = new Event({ 
				tittle: "Team trek.", 
				dateTime: "April 10th 2015, 05:00 PM.", 
				venue: "Drive Inn Place.", 
				image:"/img/6.jpg",
				caption:"Random",
				description:"Random"
			});
			var event7 = new Event({ 
				tittle: "Anual Meet.", 
				dateTime: "April 1st 2015, 10:00 AM.", 
				venue: "Central auditorium.", 
				image:"/img/7.jpg",
				caption:"Random",
				description:"Random"
			});
			var event8 = new Event({ 
				tittle: "Team trek.", 
				dateTime: "April 10th 2015, 05:00 PM.", 
				venue: "Drive Inn Place.", 
				image:"/img/8.jpg",
				caption:"Random",
				description:"Random"
			});
			var event9 = new Event({ 
				tittle: "Anual Meet.", 
				dateTime: "April 1st 2015, 10:00 AM.", 
				venue: "Central auditorium.", 
				image:"/img/9.jpg",
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
			$(event.target.parentElement.childNodes[1]).show();
		},

		hoverOutFunction: function(event, ui){
			$(".attributes").hide();
			$(event.target.parentElement.childNodes[1]).hide();
		}
	});
	return homeView;
});