console.log(`Por favor Introduzca el número de una opcion:
   1.- Suma
   2.- Resta
   3.- Multiplicación
   4.- División
   5.- Raíz cuadrada
   6.- Formula general
   7.- Binomio cuadrado Perfecto`);

var opcion = parseInt(prompt("Eliga una opcion:"));

switch (opcion) { 
   	case 1: 	
   
      	var Numero1 = parseInt(prompt("Introduzca un numero:"));
      	var Numero2 = prompt("Introduzca otro numero:");
        function imprimirsuma(){
        var suma = Numero1 + parseInt(Numero2);
      	console.log(`${suma}`);
        }
        imprimirsuma();
   	    break;
   	case 2:
   		var Numero1 = parseInt(prompt("Introduzca un numero:"));
      	var Numero2 = prompt("Introduzca otro numero:");
        function impresta(){
        var resta = Numero1 - parseInt(Numero2);
     
      	console.log(`${resta}`);
        }
        impresta();
      	break;
    case 3:
   		var Numero1 = parseInt(prompt("Introduzca un numero:"));
      	var Numero2 = prompt("Introduzca otro numero:");
      	function impmult(){
        var mult = Numero1 * parseInt(Numero2);
      	console.log(`${mult}`);
        }
        impmult();
      	break; 
    case 4:
       
   		var Numero1 = parseInt(prompt("Introduzca un numero:"));
      	var Numero2 = prompt("Introduzca otro numero:");
        function impdi(){
        var div = Numero1 / parseInt(Numero2); 
        if (Numero2 == 0){
      	  console.log("La Division no se puede realizar");   
           }else{
          console.log(`${div}`);   
           }
          }
          impdi();
         	break;  
             
    case 5:
        var Numero1 = parseInt(prompt("Introduzca un numero:"));
     	  function impraiz(){
        var raiz = Math.sqrt(Numero1);
      	console.log(`${raiz}`);
         }
         impraiz();
      	break; 

          
    case 6:
    var a = parseInt(prompt("Introduzca el valor de a"));
    var b = prompt("Introduzca el valor de b");
    var c = prompt("Introduzca el valor de c");
    function impecuacion(){
    var res = (b*b) - 4*(a*c) ;
    if(res>0){
        X1=(-b + Math.sqrt(res))/2*a;
        X2=(-b - Math.sqrt(res))/2*a;
        console.log("La ecuacion tiene dos soluciones.");  
        console.log(`X1= ${X1}`);
        console.log(`X2= ${X2}`);
    
    }else if(res==0){
      X1=(-b + Math.sqrt(res))/2*a;
      console.log("La ecuacion tiene una solucion.");
      console.log(`X1= ${X1}`);

    }else{
      console.log("La ecuacion no tiene solucion.");
    }
  }
  impecuacion();
    break; 

    case 7:
      var a= parseInt(prompt("Introduzca el valor de a"));
      var b= prompt("Introduzca el valor de b");
      function impcuadrado(){
     var resp = (a*a)+ (2*a*b)+(b*b);
     console.log(`${resp}`);
      }
      impcuadrado();
     break; 

default: 
      	console.log('NO SE EJECUTO NINGUNA DE LAS OPCIONES'); 
}