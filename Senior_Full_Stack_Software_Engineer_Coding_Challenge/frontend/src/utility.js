
let axiosConfig ={
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

let basicAuth ={ auth: {
        username: 'news',
        password: 'newsecrect'
    }
}

let dateFormat = (date)=>{
    if(date===null){
        return date;
    }
    return new Date(date).toDateString();
}

let excerptCleaner =(excerpt)=>{
    if(excerpt===null){
        return excerpt;
    }
    return excerpt.replace(/\[\+\d+\s\w+]/g,'');
}

module.exports = {
    dateFormat:dateFormat,
    excerptCleaner:excerptCleaner,
    axiosConfig:axiosConfig,
    basicAuth:basicAuth
}