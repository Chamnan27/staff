Template.home.onCreated(function () {
   this.state=new ReactiveVar();
    this.state.set('yiman');
});
Template.home.helpers({
   data(){
       const instance=Template.instance();
       return instance.state.get();
   } 
});
Template.home.events({
    'click .js-test'(){
        let a = 'veasna';
        alert(_.isString(a));
    },
    'click #play': function () {

        FlowRouter.go('/');
        // ​console.log('click');
        var s = new buzz.sound('/sound/VongVeng.mp3');

        s.togglePlay();
    },
    'click #play1': function () {
        var d = new buzz.sound('/sound/AhGirl.mp3');
        d.togglePlay();
    },
    'click .method_body'(event, instance){
        Meteor.call('Hi',params ,function (error, result) {
            if(!error){
                instance.state.set(result);
            }
            
        })
    }

//         if (s.isPaused()){
//     alert("The sound is paused!");
//
// }
});