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
Template.staffActions.onRendered(function () {
    // Create new  alertify
    createNewAlertify('staffUpdate');
});
Template.staffActions.events({
    'click .jsUpdate': function () {
        console.log(this);

        alertify.staff(renderTemplate(Template.staffUpdate, this))
            .set({
                title: fa('edit', ' Staff')
            })
            .maximize();
    },

    // });
    // },
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
Template.staffUpdate.events({});
AutoForm.addHooks('staffUpdate', {
    onSuccess: function (formType, result) {
        FlowRouter.go('staff');
        Bert.alert('Success', 'success', 'growl-top-right');
    },
    onError: function (formType, error) {
        Bert.alert('Error', 'danger', 'growl-top-right');
    }
});
AutoForm.addHooks('staffInsert', {
    before: {
        insert: function (doc) {
            doc._id = idGenerator.gen(Staff, 4);
            return doc;

        }
    },
    onSuccess: function (formType, result) {
        FlowRouter.go('staff');
        Bert.alert('Success', 'success', 'growl-top-right');
    },
    onError: function (formType, error) {
        Bert.alert('Error', 'danger', 'growl-top-right');
    }
});
