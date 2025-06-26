import mongoose from 'mongoose';

const message = new mongoose.Schema({
    senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    }
}
, {
    timestamps: true
});

export const Message = mongoose.model('Message', message);
export default Message;