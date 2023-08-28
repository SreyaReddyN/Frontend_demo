function jfun3(){
    var m=parseInt(form3.tx1.value);
    var s=parseInt(form3.tx2.value);
    var c=parseInt(form3.tx3.value);
    var total;
    var percentage;
    var maxMarks=100;

    total=m+s+c;
    percentage=(total/(3*maxMarks))*100;
    
     form3.tot.value=total;
     form3.per.value=percentage;
     form3.max.value=3*maxMarks;

}

function jfun4(){
    window.open("https://www.dacast.com/blog/live-streaming-classroom-online/#:~:text=Here%20are%20some%20broadcasting%20tips%20for%20how%20to,plain%20shirt%20%28no%20stripes%2C%20plaids%2C%20or%20anything%20distracting%29", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=400,width=400,height=400");
}
function jfun5(){
    var cor1=document.getElementById("c").value
    if(cor1=="CSE"){
        alert("<h2>Course Name:Computer Science</h2><br> Course Duration:2 Months <br> ")
    }
    if(cor1=="DS"){
        alert("<h2>Course Name:Data Science</h2><br> Course Duration:1 Months <br> ")
    }
    

    if(cor1=="AI"){
        alert("<h2>Course Name:AI</h2><br> Course Duration:3 Months <br> ")
    }
}
function jfun5(){
    
    var mail=prompt("Enter Your Email Id")
    
    if(mail!=""){

        var con=prompt("Enter Your Country");
        if(con.toLowerCase()=="india"){
            alert("Yayy!! You got a 50% off");
        }
        else if (con.toLowerCase()!="india" && con.toLowerCase()!=""){
            alert("Thank you for Subcribing!!");
        }
        else{
            alert("Please Enter the details");
        }
        

    }
    else if(mail.value==""){
        alert("Please Enter Your Email ID")
    }
}

function answer()
{
   var a = document.getElementsByName("q1");
    var b = document.getElementsByName("q2")
    var count1=0;
    var count2=0;
    for (let i of a) {


 

        if (i.checked) {
            if(i.value=="Static Page")
            {
            count1=count1+2;
            }
          }
    }
    for (let i of b) {

 

        if (i.checked) 
        {
            if(i.value=="Dynamic Page")
            {
            count2=count2+2;
            }
          }
    }

 

    alert("YOUR SCORE IS  "+(count1+count2))


}