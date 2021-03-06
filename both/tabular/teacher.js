TabularTables = {};

TabularTables.Teacher = new Tabular.Table({
    name: "Teacher",
    collection: Teacher,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "address", title: "Address"},
        {
            data: "dob",
            title: "Date of birth",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('MMM/DD/YYYY');
                } else {
                    return 'Never';
                }
            }
        },

        {
            title: 'Action', tmpl: Meteor.isClient && Template.teacherActions
        }
    ]

})
;