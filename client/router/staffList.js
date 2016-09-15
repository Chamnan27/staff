FlowRouter.route('/staffList', {
    name: "staffList",

    action: function (params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "staffList"});

    }
});
FlowRouter.route('/staffListReport', {
    name: "staffListReport",

    action: function (params, queryParams) {
        BlazeLayout.render("reportLayout", {content: "staffListReport"});

    }
});
FlowRouter.route('/staffContract', {
    name: "staffContract",

    action: function (params, queryParams) {
        BlazeLayout.render("staffLayout", {content: "staffContract"});
    }
});