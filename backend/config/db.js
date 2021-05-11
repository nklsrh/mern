import mongoose from 'mongoose'

var connectionString = "mongodb://{uname}:{pwd}@cluster0-shard-00-00.iwv3j.mongodb.net:27017,cluster0-shard-00-01.iwv3j.mongodb.net:27017,cluster0-shard-00-02.iwv3j.mongodb.net:27017/{dbName}?ssl=true&replicaSet=atlas-uucxuy-shard-0&authSource=admin&retryWrites=true&w=majority";
var connectionStringOffline = "mongodb://127.0.0.1:27017/{dbName}";

const connectDB = async (database, u, p) => {
    try {
        var stringUsed= connectionString;

        var finalString = stringUsed.replace("{uname}", u);
        var finalStringPwd = finalString.replace("{pwd}", p);
        var finalStringName = finalStringPwd.replace("{dbName}", database);

        //const con = await mongoose.connect(``, { 
        const con = await mongoose.connect(finalStringName, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB