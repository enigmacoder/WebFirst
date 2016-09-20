$(document).ready(function(){
        var value=16; 
        for(var i=0;i<value;i++){
            for(var j=0;j<value;j++){
                var elem=$("<div class='unit'></div>");
                elem.appendTo($("#wrapper"));
            }
        }
        $(".unit").hover(function(){
            $(this).css("background-color","#8AA4FD");
            console.log("Here");
        },
        function(){
            $(this).css("background-color","#061753");
        });
        $("#Grid_Value").click(function(){
            value=prompt("Enter the no. of grids:"); 
            $(".unit").remove();
            //$(".unit").unbind("mouseenter mouseleave");
            for(var i=0;i<value;i++){
              for(var j=0;j<value;j++){
                 var elem=$("<div class='unit'></div>");
                 elem.appendTo($("#wrapper"));
               }
            }
            var elem=$(".unit");
            elem.css("background-color","#8AA4FD");
            elem.css("margin","1px");
            var dim=1024/value-2;
            var dimStr=dim+"px";
            elem.css("height",dimStr);
            elem.css("width",dimStr);
            $(".unit").hover(function(){
                $(this).css("background-color","#8AA4FD");
            },
            function(){
                $(this).css("background-color","#061753");
            });
        });
      
});
        
            
