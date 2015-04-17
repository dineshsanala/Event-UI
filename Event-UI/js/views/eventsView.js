define(['../.././libs/text.js!../.././templates/eventsView.html', '.././models/eventModel', '.././collections/eventsCollection',], function (eventsTpl, Event, Events) {
	var eventsView;
	eventsView = Backbone.View.extend({
		el: ".eventsView",

		template: eventsTpl,

		initialize: function(params) {
			var self = this;
			self.model = Event;
			self.viewMode=params.viewMode;
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
				self.template = _.template( self.template );
				self.render() ;
				self.addClasses();
			});
		},

		events: {
			'mouseenter .imageParents': 'hoverFunction',
			'mouseleave .imageParents': 'hoverOutFunction',
			'click .imageParents' : 'specificEventView',
			'click .gridClass' : 'getGridView',
			'click .listClass' : 'getListView',
			'click .mainBox' : 'specificEventView'
		},

		addClasses: function(){
			var attributesArray = $(".attributes");
			for(var i=0; i<attributesArray.length; i++){
				if( parseInt($(attributesArray[i]).attr("modelId"))%3 == 0 ){
					$(attributesArray[i]).addClass('responsiveClass');
				}
			}
		},

		getGridView: function(){
			this.viewMode = 'grid';
			this.render();
		},

		getListView: function(){
			this.viewMode = 'list';
			this.render();
		},

		render: function() {
			var self = this;
			self.myEvents.models.viewMode = self.viewMode;
			$(this.el).html( this.template({ Events : self.myEvents.models }) );
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