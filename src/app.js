console.log("App.js is running!");


// JSX - Jaavscript XML
/*
var template = React.createElement(
    'h1',
    {id: "someID"},
    "Something new"
);
*/

 var template =( 
<div>
     <h1>Indecision App</h1>
     <p>This is some info</p>
     <ol>
         <li>Item one</li>
         <li>Item two</li>
         <li>Item three</li>
     </ol>
</div>
);

var appRoot = document.getElementById('app');

// 'ReactDOM.render()' takes two arguments. 
// First one is JSX, that you want to render. 
// The second one is the DOM element, where you like to render.
ReactDOM.render(template,appRoot);