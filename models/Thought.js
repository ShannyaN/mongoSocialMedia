const {model, Schema} = require('mongoose');

const thoughtSchema = new Schema (
    {
        thoughtId : {
        type: Schema.Types.ObjectId,
        default: ()=> new Schema.Types.ObjectId
        },
        thoughtText: {
            type: String, 
            required: true, 
            maxlength: 250,
            minlength: 1,
        },
        createdAt : {
            type: Date,
            default: Date.now,
        }
    }
)