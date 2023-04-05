const {model, Schema} = require('mongoose');
const {reactionSchema} = require('./Reaction')
const thoughtSchema = new Schema (
    {
        
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
        //id: false,
    }
)

thoughtSchema.virtual('reactionCount').get(function(){ 
    return this.reactions.length;
})

const Thought = new model('thought', thoughtSchema)

module.exports = Thought;