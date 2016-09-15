
FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("MainLayout", {content: "home"});
    }
});