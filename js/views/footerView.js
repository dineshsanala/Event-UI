define(['../.././libs/text.js!../.././templates/footer.html'], function (footerTpl) {
	var FooterView;
	FooterView = Backbone.View.extend({
		el: "#footer",

		template: footerTpl,

		render: function() {
			this.$el.html(_.template(this.template));
		}
	});
	return FooterView;
});