import {Staff} from "../../both/collection/staff"
Meteor.methods({
   body(params){
       
       Meteor._sleepForMs(2000);

       return `Hi ${params}!`;
   } ,
    staffList(param){
        Meteor._sleepForMs(2000);

        let data=Staff.find(param).fetch();
        return data;

    }
});