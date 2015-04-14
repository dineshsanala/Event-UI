define(['.././models/eventModel'], function (Event) {
	var Events;
	Events = Backbone.Collection.extend({
    	model: Event
  	});
	return Events;
});