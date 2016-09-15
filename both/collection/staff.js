export const Staff = new Mongo.Collection('staff');

let StaffSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 20
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: 'select',
            options: [
                {label: 'Male', value: 'Male'},
                {label: 'Female', value: 'Female'}
            ]
        }


    },
    dob: {
        type: Date,
        label: "Date of birth",
        autoform: {
            type: 'bootstrap-datetimepicker',
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'MMM/DD/YYYY',
                    pickTime: false
                }
            }
        }
    },
    address: {
        type: String,
        label: "Address",
        optional: true
    }
});

Staff.attachSchema(StaffSchema);