{
    {
        {
            {
             var sera = 'Sera???'
             console.log(sera)
            }
        }
    }
}
console.log(sera)


// Uma variavel quando definida dentro de uma funcao só sera visivel dentrao da mesma
 
/* existem 2 escopos para variavel (Var)
 *1 nivel glogal
 *2 escopo de funcao
 */

 // --------------------------------------------------------


 var numero = 1
 {
     var numero = 2
     console.log ('dentro =', numero)
 }
 console.log('fora =', numero)