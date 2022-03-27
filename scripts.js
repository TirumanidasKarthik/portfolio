const resumePath = "files/myResume.pdf";
const moreLinkId = document.getElementById("moreLink");
const moreDropdownContentId = document.getElementById("moreDropdownContent");
const moreDropdownCaret = document.getElementById("moreDropdownCaret");
moreLinkId.addEventListener("click", moreLinkDropdown);

function viewResume(){
    window.open(resumePath);
}
 


function moreLinkDropdown(){
    var x = window.getComputedStyle(moreDropdownContentId).getPropertyValue("display");
    if(x === "none"){
        moreDropdownContentId.style.display = "block";
        moreDropdownCaret.className = "fa fa-caret-left";
    }else{
        moreDropdownContentId.style.display = "none";
        moreDropdownCaret.className = "fa fa-caret-down";
    }
}
