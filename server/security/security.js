import {Staff} from "../../both/collection/staff";
Staff.permit(['insert','update','remove']).allowInClientCode();