Template.teacher.events({
    'click .jsAddNew': function () {
        FlowRouter.go('/teacherInsert');
    }
});

//action

Template.teacherActions.events({
    'click .jsUpdate': function () {
        FlowRouter.go('teacherUpdate', {id: this._id});
        console.log(this._id);
        // Bert.alert('Update', 'success', 'growl-top-right');
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
AutoForm.addHooks('teacherUpdate', {
    onSuccess: function (formType, result) {

        FlowRouter.go('teacher');
        Bert.alert('Success', 'success', 'growl-top-right');
    },
    onError: function(formType, error) {
        Bert.alert('Error', 'danger', 'growl-top-right');
    }
});
AutoForm.addHooks('teacherInsert', {
    onSuccess: function (formType, result) {
        FlowRouter.go('teacher');
        Bert.alert('success', 'success', 'growl-top-right');
    },
    onError: function(formType, error) {
        Bert.alert('Error', 'danger', 'growl-top-right');
    }
});

Template.teacherUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var info = Teacher.findOne({_id: id});
        return info;

    }
});

