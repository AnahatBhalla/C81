var student_arry=[];
 function submit (){
    var display_array=[];
    for(var j=1; j<=4; j++){
        var student_name=document.getElementById("name_of_the_student_"+j).value;
        student_arry.push(student_name);

    }
    var l=student_arry.length;
    for(var k=0; k<l;k++){
        display_array.push("<h4>Name-"+student_arry[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";


 }

 function sorting (){
    student_arry.sort();
    var display_array=[];
    var l=student_arry.length;
    for(var k=0; k<l;k++){
        display_array.push("<h4>Name-"+student_arry[k]+"</h4>");
    }
    var remove_commas=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
 }