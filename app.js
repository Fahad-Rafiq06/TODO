var container = document.getElementById('container');
// containerbox
var one = document.createElement('div');
one.setAttribute("class","one");
container.append(one);
// box
 var add = document.createElement('input');
 add.setAttribute("placeholder","ADD_TEXT")
 add.style.height = "50px";
 add.style.width = "350px";
 add.style.backgroundColor = "white";
 add.style.border = "2px solid black";
 add.style.paddingLeft = "20px"
 add.style.borderRadius = "5px"
 one.append(add);
//  button
 var btn = document.createElement('button');
 var text = document.createTextNode("Add")
 btn.appendChild(text);
 btn.setAttribute("onClick","put()")
 btn.style.height = "50px";
 btn.style.width = "100px";
 btn.style.borderRadius = "5px"
 btn.style.backgroundColor = "black";
 btn.style.border = "2px solid white";
 btn.style.color = "white";
 btn.style.marginLeft = "10px"
 one.append(btn)

//  listcontainer
 var two = document.createElement('div')
 two.setAttribute("class","two")
container.append(two);




// functionofadd
function put()
{
    v = add.value;
    console.log(v)
    add.value = "";

    // edit_button
    var editbtn = document.createElement("button");
    var e = document.createTextNode("EDIT")
    editbtn.appendChild(e);
    editbtn.setAttribute("onClick", "edit()")
    editbtn.style.height = "23px";
    editbtn.style.width = "50px";
    editbtn.style.borderRadius = "5px"
    editbtn.style.backgroundColor = "white";
    editbtn.style.border = "1px solid black";
    editbtn.style.marginLeft = "40%"

    // DELETBUTTON
    var dltbtn = document.createElement("button");
    var d = document.createTextNode("DELETE")
    dltbtn.appendChild(d);
    dltbtn.setAttribute("onClick", "Delete()")
    dltbtn.style.height = "23px";
    dltbtn.style.width = "70px";
    dltbtn.style.borderRadius = "5px"
    dltbtn.style.backgroundColor = "white";
    dltbtn.style.border = "1px solid black";
    dltbtn.style.marginLeft = "5px";

    vl = document.createElement('div');
    vl.setAttribute("class", "show");
    vl.setAttribute("id",Math.random())
    t = document.createTextNode(v)
    vl.append(t)
    vl.appendChild(editbtn)
    vl.appendChild(dltbtn)
    two.append(vl)
  
}
function Delete()
{

}