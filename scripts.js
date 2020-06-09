let names = ["Szabi", "Rita", "Tibi"];

names.forEach(name => {
    if (name === "Rita") {
        $("ul").append(`<li class="bold"> ${name}</li>`);    
    } else
    $("ul").append(`<li>${name}</li>`);
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

//$("body").append(`<div class="hp"><h1>${additionalBlock.title}</h1></div>`);
//$(".hp").append(`<p>${additionalBlock.text}</p>`);


$("body").append(`<div class="hp">
  <h1>${additionalBlock.title}</h1>
  <p>${additionalBlock.text}</p>
</div>`);

//var heading = document.createElement("H1");
//var t=document.createTextNode("Added with javascript");
//heading.appendChild(t);
//document.body.appendChild(heading);
     
 //$('body').append(
//    '<div><h1>' + additionalBlock.title + '</h1>',
//    '<p>' + additionalBlock.text + '</p></div>',
//);