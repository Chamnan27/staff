import {Staff} from '../../both/collection/staff';
Meteor.publish('staff', function (staffId) {
    let data=Staff.find({_id: staffId});
    return data;

});
