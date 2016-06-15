Teacher= new Mongo.Collection('teacher');

TeacherSchema = new SimpleSchema({
    name: {
    type: String,
       label: "Name",
        max: 20
    },

    gender: {
        type: String,
        label: "Gender",
        autoform: {
            options: [
                {label: "Male", value: "M"},
                {label: "Female", value: "F"}

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

    Teacher.attachSchema(TeacherSchema);
