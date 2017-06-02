document.addEventListener("DOMContentLoaded", function () {
    var mybtn = document.createElement("button");
    mybtn.innerText = "Click me!";
    document.body.appendChild(mybtn);
    mybtn.id = 'mybtn';
    var count = 1;
    mybtn.addEventListener('click', function () {
        var createDiv = document.createElement("div");
        var blackBox = document.createElement("p");
        var text = document.createTextNode(count);
       
        count++;
        createDiv.id = count;
        createDiv.appendChild(blackBox);
        createDiv.appendChild(text);
        createDiv.style.backgroundColor = "black";
        createDiv.style.height = "72px";
        createDiv.style.width = "72px";
        createDiv.style.margin = "10px";
        blackBox.id = blackBox;
        blackBox.style.color= "white";
        document.body.appendChild(createDiv);
        document.body.appendChild(blackBox);
console.log(blackBox)

        //function for on click-change color
        var cChange = document.getElementById(count);
        document.body.appendChild(cChange);
        cChange.addEventListener('click', function () {
            cChange.style.backgroundColor = setRandomColor();
        })
        function setRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        //function for hover display div
        console.log(count);

       
        // document.body.appendChild()
        // count.addEventListener('mouseover', function () {
        //     var p1=document.createElement
        //     console.log("It's working");
        })
        console.log(count);
    })

// last two lines of hover display function
//  document.createElement('p').appendChild.document.createTextNode(count)
//  document.body.appendChild.document.createElement('p');
