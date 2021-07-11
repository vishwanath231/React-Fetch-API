import React from 'react';
import './App.css';
import Data from './Components/User.json'
import Text from './Components/Sample.txt'

function App() {


    // Text 
    function getTxt(){ 
        var title= "<h2>Text</h2>"
        fetch(Text)
        .then((res)=> res.text())
        .then((result)=> {
            document.getElementById("output").innerHTML = title+result;
        })
    }
    
    // JSON
    function getJson(){
        let output = "<h2>JSON</h2><br/>";
        Data.map(post => (
            output += 
            `<div>`+
                `<h5>ID : ${post.id}</h5>`+
                `<h6>Name : ${post.name}</h6>`+
                `<div>City : ${post.city}</div>`+
                `<br/>`+
            `</div>`
        ))
        document.getElementById("output").innerHTML = output;
    }

    // API
    async function getApi(){
        const api = await fetch('https://jsonplaceholder.typicode.com/posts');
        const parsedApi = await api.json();

       let output = "<h2>API</h2><br/>";

        parsedApi.forEach(data => {
            output += 
            `<div>`+
                `<h5>ID : ${data.id}</h5>`+
                `<h6>Title : ${data.title}</h6>`+
                `<div>Body : ${data.body}</div>`+
                `<br/>`+
            `</div>`
        });

        document.getElementById("output").innerHTML = output;

    }

    
    
    return (
        <>
            <div className="container" style={{maxWidth:'800px'}}>
                <h2 className="display-4 mb-4">Fetch API Sandbox</h2>
                <div className="d-flex">
                    <button onClick={getTxt} className="btn btn-primary mr-4">Get Text</button>
                    <button onClick={getJson} className="btn btn-success mr-4">Get JSON</button>
                    <button onClick={getApi} className="btn btn-warning mr-4">Get API</button>
                </div>
                <hr />
                <div id="output" className=" p-3 mt-4"></div>
            </div>
        </>
    )
}

export default App;
