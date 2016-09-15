export const Contract= new SimpleSchema({
    staffId: {
        type: String,
        label: "Name",
        max: 20
    },
    staffDate: {
        type: Date,
        label: "Staff Date",
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
    staffEnd: {
        type: Date,
        label: "End Date",
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
    position: {
        type: String,
        label: "Position",
        optional:true,
        autoform: {
            type: 'select2',
            options(){
                return [
                    {label: 'Admin', value: 'Admin'},
                    {label: 'Driver', value: 'Driver'},
                    {label: 'Clean', value: 'Clean'}
                ]
            }

        }
    },
    salary: {
        type: String,
        label: "Name",
        optional:true
        
    }
});
