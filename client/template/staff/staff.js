// Index
Template.staff.onRendered(function () {
    // Create new  alertify
    createNewAlertify('staff');
});
Template.staff.events({
    'click .jsAddNew': function () {
        alertify.staff(renderTemplate(Template.staffInsert))
            .set({
                title: fa('plus', ' Staff')
            })
            .maximize();
    }
});

// Action
Template.staffActions.events({
    'click .jsUpdate': function () {
        // Bert.alert('<h1>កែប្រែ</h1>', 'success', 'growl-top-right');

        FlowRouter.go('staffUpdate', {id: this._id});
        console.log(this._id);

    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm(
            'Remove',
            'Are you sure to remove this!',
            function (ok) {
                Staff.remove(self._id);
                Bert.alert('Success', 'success', 'growl-top-right');
            },
            null
        );
    }
});

// Insert

// Update
Template.staffUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var info = Staff.findOne({_id: id});
        return info;
    }
});

AutoForm.addHooks('staffUpdate', {
    onSuccess: function (formType, result) {
        FlowRouter.go('staff');
        Bert.alert('Success', 'success', 'growl-top-right');
    },
    onError: function(formType, error) {
        Bert.alert('Error', 'danger', 'growl-top-right');
    }
});
AutoForm.addHooks('staffInsert', {
    onSuccess: function (formType, result) {
        FlowRouter.go('staff');
        Bert.alert('Success', 'success', 'growl-top-right');
    },
    onError: function(formType, error) {
        Bert.alert('Error', 'danger', 'growl-top-right');
    }
});
