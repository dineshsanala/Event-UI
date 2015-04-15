define(['../.././libs/text.js!../.././templates/eventsView.html', '.././models/eventModel', '.././collections/eventsCollection',], function (eventsTpl, Event, Events) {
	var eventsView;
	eventsView = Backbone.View.extend({
		el: ".eventsView",

		template: eventsTpl,

		initialize: function(params) {
			console.log(params.viewMode);
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
	return eventsView;
});