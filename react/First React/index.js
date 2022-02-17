const element = <h1 className="header">This is JSX</h1>
console.log(element);

/*
콘솔로 찍어보면 자바스크립트 오브젝트인데, 화면으로는 HTML처럼 보임.
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "className": "header",
        "children": "This is JSX"
    },
    "_owner": null,
    "_store": {}
}
*/

// JSX
ReactDOM.render(element, document.getElementById("root"));