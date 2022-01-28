Login.js

$(document).ready(

    ()=>{

        $('input[type="button"]').click(

            ()=>{

                var username=$('input[type="text"]').val();

                var password=$('input[type="password"]').val();

                if(username=='' && password==''){

                    alert("username and password is not entered");

                }

                else{

                    $.ajax({

                        url:"http://localhost:3000/employees",

                        type:'GET',

                        data:{

                            "username":username,

                            "password":password,

                        },

                        success:(x)=>{

                            alert(username+"Welcome..! logged in successful.." );

                            console.log(x);

                           window.location="http://127.0.0.1:5500/html/registration.html"

                        }

                    })

                }

            }

        )

    }

)