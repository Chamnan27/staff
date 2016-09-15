// Index
import  {Staff} from "../../../both/collection/staff";

Template.staff.onRendered(function () {
    // Create new  alertify
    createNewAlertify('staff');
});
Template.staffInsert.helpers({
    staffCollection (){
        return Staff;
    }
});
// Template.staffInsert.events({
//     'click #staffInsert'() {
//         FlowRouter.go('staff');
//     }
// });

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
    'click.js-back': function () {
        FlowRouter.go('staff');
    }
});
Template.staffActions.events({
    'click .jsUpdate': function () {
        console.log(this);

        alertify.staff(renderTemplate(Template.staffUpdate, this))
            .set({
                title: fa('edit', ' Staff')
            })
            .minBy();
    },

    // });
    // },
    'click .jsRemove': function () {
        var self = this;
        console.log(self);
        alertify.confirm('Are you sure want to remove?',
            function (result, error) {
                if (error) {
                    console.log("error");
                    Staff.remove(self._id);
                    Bert.alert('Successfully Removed', 'success', 'growl-bottom-right');

                }
                else {
                    Bert.alert(error.stack, 'danger', 'growl-top-right');
                }
            });
        // alertify.confirm(
        //     'Remove',
        //     'Are you sure to remove this!',
        //     function (ok) {
        //         Staff.remove(self._id),function (error) {
        //           if (!error){console.log("error");
        //               Bert.alert('Delete', 'success', 'growl-top-right');
        //           } else {
        //
        //               Bert.alert(error.message, 'danger', 'growl-top-right');
        //           }
        //         };
        //
        //     },
        //     null
        // );
    }
});

// Update
// Template.staffUpdate.onCreate(function () {
//   Tracker.autorun(function () {
//       let id= FlowRouter.getParam('id');
//       Meteor.subscribe("staff", id);
//
//   })
// });
Template.staffUpdate.helpers({
    staffCollection (){
        return Staff;
    },
    data(){

        let id = FlowRouter.getParam('id');
        console.log(staff.find().count());
        return Staff.findOne({_id: id});
    }
    // data: function () {
    //     var id = FlowRouter.getParam('id');
    //     var info = Staff.findOne({_id: id});
    //     return info;
    // }
});
Template.staffUpdate.events({});
AutoForm.addHooks('staffUpdate', {
    onSuccess: function (formType, result) {
        FlowRouter.go('staff');
        Bert.alert('Success', 'success', 'growl-top-right');
    },
    onError: function (formType, error) {

        Bert.alert(error.message, 'danger', 'growl-top-right');
    }
});
AutoForm.addHooks('staffInsert', {
    before: {
        insert: function (doc) {
            doc._id = idGenerator.gen(Staff, 4);
            return doc;

        }
    }
    // onSuccess: function (formType, result) {
    //     FlowRouter.go('staff');
    //     console.log('remove');
    //     Bert.alert('Success', 'success', 'growl-top-right');
    // },
    // onError: function (formType, error) {
    //     Bert.alert('Error', 'danger', 'growl-top-right');
    // }
});
