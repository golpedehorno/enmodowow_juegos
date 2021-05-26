 function piedrar(){
    var jugados=0
    var ganados=0
    var perdidos=0
    var empatados=0
    
    while(confirm("Jugamos?")){
      var jugadaQ=prompt("Bueno, escribí P si elegís PIEDRA, PP por PAPEL o T por TIJERA")
      var jugada=jugadaQ.toLowerCase()
    
      if(jugada=="p"){
        jugada="piedra"
      }else if(jugada=="pp"){
        jugada="papel"
      }else if(jugada=="t"){
        jugada="tijera"
      }
    
      if(jugada=="piedra" || jugada=="papel" || jugada=="tijera"){
        var numero=Math.floor((Math.random()*9))
      
        var elegida=""
      
      
        if(numero<=3){
          elegida="piedra"
         }
         else if(numero<=6){
          elegida="papel"
         }
         else{
           elegida="tijera"
         }
         
         if(jugada=="piedra" && elegida=="piedra"){
           alert("Vos elegiste: "+jugada + "... Yo saqué: "+elegida+"... Empatamos!")
             empatados++;    
         }
         else if(jugada=="piedra" && elegida=="papel"){
           alert("Vos elegiste: "+jugada + "... Yo saqué: "+elegida+"... Perdiste!")
              perdidos++;
         }
         else if(jugada=="piedra" && elegida=="tijera"){
           alert("Vos elegiste: "+jugada + "... Yo saqué: "+elegida+"... Ganaste!")
              ganados++;
         } 
         else if(jugada=="papel" && elegida=="piedra"){
          alert("Vos elegiste: "+jugada + "... Yo saqué: "+elegida+"... Ganaste!")
            ganados++;
        }
        else if(jugada=="papel" && elegida=="papel"){
          alert("Vos elegiste: "+jugada + "... Yo saqué: "+elegida+"... Empatamos!")
           empatados++;
        }
        else if(jugada=="papel" && elegida=="tijera"){
          alert("Vos elegiste: "+jugada + "... Yo saqué: "+elegida+"... Perdiste!")
            perdidos++;
        }
        else if(jugada=="tijera" && elegida=="piedra"){
          alert("Vos elegiste: "+jugada + "... Yo saqué: "+elegida+"... Pediste!")
            perdidos++;
        }
        else if(jugada=="tijera" && elegida=="papel"){
          alert("Vos elegiste: "+jugada + "... Yo saqué: "+elegida+"... Ganaste!")
            ganados++;
        }
        else if(jugada=="tijera" && elegida=="tijera"){
          alert("Vos elegiste: "+jugada + "... Yo saqué: "+elegida+"... Empatamos!")
           empatados++;
        }
      }
      else{
        alert("Pusiste cualquier cosa, ponete las pilas!")
      }
      }
    
      var piedra=document.querySelector(".piedra")

      piedra.innerHTML= "Jugamos: " + (empatados+ganados+perdidos) + " veces.</br>"+ "Empatamos: " + empatados + " veces.</br>"+"Ganaste: " + ganados + " veces.</br>"+"Perdiste: " + perdidos + " veces.</br>"
    //   document.write()
    //   document.write()
    //   document.write()
    //   document.write()
    
    





 }