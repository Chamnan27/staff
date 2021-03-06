// Index
import  {Staff} from "../../../both/collection/report/staff";

// let dataState = new ReactiveVar();

// let isWaitingState = new ReactiveVar(false);
Template.staffList.onCreated(function () {

});

Template.staffList.helpers({
   staffSchema(){
       return Staff;
   }
});

AutoForm.addHooks('staffList', {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        this.event.preventDefault();
        this.done(null, insertDoc);
    },
    onSuccess: function (formType, result) {
        console.log(result);
        let url = FlowRouter.path('staffListReport', {},result);
        // isWaitingState.set(true);
        // Meteor.call('staffList', result, function (error, reslut) {
        // if (!error) {
        //     dataState.set(reslut);
        //    isWaitingState.set(false);
        // }
        // }
        console.log(url);
        window.open(url, '_blank');
    },
    onError: function (formType, error) {
        //     Bert.alert('Error', 'danger', 'growl-top-right');
    }
});
Template.staffListReport.onCreated(function(){
   let self=this;
    self.dataState=new ReactiveVar();

    Tracker.autorun(()=>{
        let params={
            gender:FlowRouter.getQueryParam('gender')
        };
        Meteor.call('staffList',params,function(error, result){
            if(!error){
                self.dataState.set(result);
            }
        })
    });
});
Template.staffListReport.helpers({
   data(){
       return Template.instance().dataState.get();
   }
});