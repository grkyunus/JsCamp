export  class BaseLogger {
    log(data){
        console.log("Defoult logger "+ data)
    }

    
}

export  class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic "+ data)
    }
}

export  class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo "+ data)
    }
}
