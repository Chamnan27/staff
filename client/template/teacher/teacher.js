Template.teacher.onRendered(function () {
    // Create new  alertify
    createNewAlertify('teacher');
});
Template.teacher.events({
    'click .jsAddNew': function () {
        alertify.teacher(renderTemplate(Template.teacherInsert))
            .set({
                title: fa('plus', ' teacher')
            })
            .maximize();
    }
});

//action
Template.teacherActions.onRendered(function () {
    // Create new  alertify
    createNewAlertify('teacherUpdate');
});
Template.teacherActions.events({
    'click .jsUpdate': function () {

        console.log(this);

        alertify.teacher(renderTemplate(Template.teacherUpdate, this))
            .set({
                title: fa('edit', ' Teacher')
            })
            .maximize();
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm(
            'Remove',
            'Are you sure to remove this!',
            function (ok) {
                Teacher.remove(self._id);
                Bert.alert('Success', 'success', 'growl-top-right');
            },
            null
        );
    }
});
Template.teacherUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var info = Teacher.findOne({_id: id});
        return info;
    }
});

AutoForm.addHooks('teacherUpdate', {
    onSuccess: function (formType, result) {

        FlowRouter.go('teacher');
        Bert.alert('Success', 'success', 'growl-top-right');
    },
    onError: function (formType, error) {
        Bert.alert('Error', 'danger', 'growl-top-right');
    }
});
AutoForm.addHooks('teacherInsert', {
    before: {
        insert: function (doc) {
            doc._id = idGenerator.gen(Teacher, 4);
            return doc;
        }
    },
    onSuccess: function (formType, result) {
        FlowRouter.go('teacher');
        Bert.alert('success', 'success', 'growl-top-right');
    },
    onError: function (formType, error) {
        Bert.alert('Error', 'danger', 'growl-top-right');
    }
});

// AutoForm.hooks({
//     teacherInsert: {
//         before: {
//             insert: function (doc) {
//                 doc._id = idGenerator.gen(Teacher, 4);
//                 return doc;
//             }
//         },
//         onSuccess: function (formType, id) {
//             FlowRouter.go('teacher');
//             Bert.alert('success', 'success', 'growl-top-right');
//         },
//         onError: function (formType, error) {
//             Bert.alert('Error', 'danger', 'growl-top-right');
//         }
//     }
// });
