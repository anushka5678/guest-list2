var name_of_the_guest = [];
function submit(){
    var GuestName = document.getElementById("guest_name").value;
   name_of_the_guest.push(GuestName);
}
function sortedlist(){
    name_of_the_guest.sort();
    document.getElementById("sorted_list").innerHTML= name_of_the_guest;
}
function search(){
    var s= document.getElementById("s1").value;
    var found= 0;
    var j;
    for(j=0; j<name_of_the_guest.length; j++){
        if(s==name_of_the_guest[j]){
            found=found+1;
        }
    }
    document.getElementById("searchdiv").innerHTML= "name found "+found+" time/s";
    console.log("found name "+found+"  time/s");
}
function list(){
    document.getElementById("list").innerHTML= name_of_the_guest;
}