const {connect, connection} =require('mongoose');

connect('mongodb://localhost/developersApplications',{
    newUrlParser: true, 
    useUnifiedTopology: true
    }
)

module.exports=connection;