let url = 'http://localhost:8000/api/'

if(process.env.NODE_ENV === "production"){
    url = process.env.REACT_APP_URL
}

module.exports = url