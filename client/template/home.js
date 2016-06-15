Template.home.events({

     
'click #play': function () {

    FlowRouter.go('/');
    // ​console.log('click');
     var s = new buzz.sound('/sound/VongVeng.mp3');

     s.togglePlay();
},
    'click #play1': function () {
        var d = new buzz.sound('/sound/AhGirl.mp3');
        d.togglePlay();
    }

//         if (s.isPaused()){
//     alert("The sound is paused!");
//
// }
});