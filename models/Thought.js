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
            //getter method to format the timestamp on query?
        },
        username: {
            type: String,
            ref: 'user',
            required: true,
        },
        reactions : [
                reactionSchema
        ]
    },
    {
        toJSON:{
            virtuals: true, 
            getters: true,
        },
        id: false,
    }
)

thoughtSchema.virtual('reactionCount').get(function(){ 
    return this.reactions.length;
})