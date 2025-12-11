import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({

    courseCode: { 
        type: String, 
        required: true,
        unique: true 
    },
    courseName: { 
        type: String, 
        required: true 
    },
    timeSlot: { 
        type: String, 
        required: true 
    },
    capacity: { 
        type: Number, 
        default: 30
        }
}, {
    timestamps: true 
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
export default Schedule;