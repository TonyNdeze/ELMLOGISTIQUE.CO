 export default class DBConnection{
constructor(host, user, passWord, dataBase, connectionLimit){
this.host = host;
this.user = user;
this.passWord = passWord;
this.dataBase = dataBase;
this.DBConnection = connectionLimit;

}
}



const {
    createPool
} = require('mysql');
const myConnection = new DBConnection("localhost", "root", "", "test", 10);

const pool = createPool({
    host: myConnection.host,
    user: myConnection.user,
    password: myConnection.passWord, 
    database: myConnection.dataBase,
    connectionLimit: myConnection.connectionLimit
})

 export function querySomeRows(table){
    pool.query('select * from '+table, (err, result, fields) =>{
        var log;
        if(err){
           log = err;
            return console.log(log);
        }
        log = result
        return console.log(log);
    });
}
 


