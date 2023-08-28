function jfun2()
        {
            //alert("Just For Testing")
            var name=form2.txt1.value;
            var nam1=form2.txt2.value;
            var nam2=form2.txt3.value;
            //alert(name)

            if(name=="" || nam1=="" || nam2=="" )
            {
                alert("Details Required!!!")
                form2.txt1.focus();
                form2.txt2.focus();
                form2.txt3.focus();
                return false;
              
            }

            else
            {
                alert("Go next!!!");
                return true;
               
            }

        }