define(['../.././libs/text.js!../.././templates/home.html', '.././models/eventModel', '.././collections/eventsCollection'], function (homeTpl, Event, Events) {
	var homeView;
	homeView = Backbone.View.extend({
		el: "#content",

		template: homeTpl,

		initialize: function() {
			var self = this;
			self.model = Event;
			self.collection = Events;
			$.getJSON( "../../data.json", function( Data ) {
				self.data = Data.Events;
			    var eventArray = [];
				for(var i=0; i<self.data.length; i++){
					eventArray.push(new Event({
						tittle: self.data[i].tittle,
						dateTime: self.data[i].dateTime, 
						venue: self.data[i].venue, 
						image: self.data[i].image,
						caption: self.data[i].caption,
						description: self.data[i].description,
						modelId: self.data[i].modelId
					}));
				}
				self.myEvents = new Events(eventArray);
				self.render() ;
			});
		},

		render: function() {
			var self = this;
			this.template = _.template( this.template );
			$(this.el).html( this.template( {Events : self.myEvents.models} ) );
			//console.log($(this.el).find(".pics"));
		},

		events: {
			'mouseenter .imageParents': 'hoverFunction',
			'mouseleave .imageParents': 'hoverOutFunction',
			'click .imageParents' : 'specificEventView'
		},

		specificEventView : function(event, ui){
			var currentModelId = parseInt($(event.target).attr("modelId"));
			var currentModel = this.myEvents.models[currentModelId];
			Backbone.history.navigate("specificEventView/:"+( currentModel.get("modelId") ), true);
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