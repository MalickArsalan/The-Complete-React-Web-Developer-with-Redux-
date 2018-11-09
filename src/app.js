console.log("App.js is running!");

// JSX - Jaavscript XML
/*
var template = React.createElement(
    'h1',
    {id: "someID"},
    "Something new"
);
*/

var app ={
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One','Two']

};
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle  && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0? 'Here are your options':'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = { // We can use Objects in JSX expression
    name: 'Andrew',
    age: 26,
    location: 'Philadelphia'
};
// var userName = 'Andrew';
// var userAge = 26;
// var userLoaction='New York';
//  <h1>{userName}</h1> -> JSX Expression

function getLocation(location) {
    if (location){
        // return location;
        return  <p>Location: {location}</p>
    } else {
        return undefined;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() + '!' : 'Anonymous'.toUpperCase()}</h1> 
        {/* <p>Age: {user.age}</p> */}
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {/* <p>Location: {getLocation(user.location)}</p> */}
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');

// 'ReactDOM.render()' takes two arguments. 
// First one is JSX, that you want to render. 
// The second one is the DOM element, where you like to render.
ReactDOM.render(template,appRoot);