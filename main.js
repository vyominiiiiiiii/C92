var fruits=["apple","mango","banana","watermelon"];
var x="";

for(var i=0;i<fruits.length;i++){
console.log(fruits[i]);
x=x+fruits[i]+"<br>";
console.log(x);
}

for( var i=0;i<5;i++){

    for(var j=0;j<5;j++){
    console.log("j="+j );
}

console.log("i="+i);
}


var y="";

for(var i=0;i<5;i++){

    for(var j=0;j<5;j++){

        y += "*";

    }

y +="<br>";

}

console.log(y);
document.getElementById("nested").innerHTML=y;


var z="";
var n=5;

for(var i=0;i<n;i++){

    for(var j=0;j<n;j++){

        if(i===0 ||  i===n-1){

            z +="*";

        }

            else{

                if(j===0 || j===n-1){

                    z +="*";

                }

                    else{

                        z +="&nbsp;&nbsp;"

                    }

            }

    }

    z +="<br>";

}


document.getElementById("nested1").innerHTML=z;



var num=5;
var string="";

for(var i=1;i<=num;i++){

    for(var j=0;j<num-i;j++){

        string+=" ";

    }

    for(var k=0;k<i;k++ ){

     string+="*";

    }

    string+="\n";


}

console.log(string);
document.getElementById("nested2").innerHTML=string;


var string2="";

for(var i=1;i<=num;i++){

    for(var j=0;j<i;i++){

    string2+="*";

    }

    string2+="<br>";

}

document.getElementById("nested3").innerHTML=string2;
console.log(string2);



















