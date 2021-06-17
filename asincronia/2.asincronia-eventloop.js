/**
 * Single thread y multi thread.
 *  JavaScript trabaja bajo un solo hilo de ejecución.
 *  
 * - Operaciones Síncronas y Asícronia.
 *   Lo síncrono se refiere a que todo sucede en el presente
 *   es una respuesta inmediata, es decir, espera el resultado
 *   y luego sigue otra operación.
 * 
 *   La asíncronia sucede en el futuro es decir no va ha esperar
 *   al resultado es por eso que suelta inmediatamente el control
 *   y se lo regresa al hilo pricipal.
 * 
 * - Operaciones de CPU y Operaciones de I/O.
 *   Son todas las operaciones que consumen los
 *   recursos de CPU ya sea los loops cuando no
 *   tienen esa entrada de entrada y salida y consumen
 *   demasiada memoria RAM y hacen que se trabe
 *   el sistema.
 * 
 * - Operaciones Concurrentes y Paralelas.
 *   Las paralelas son todas aquellas tareas que
 *   van a correr al mismo tiempo como cuando salen 
 *   corriendo los atletas despues de escuchar el disparo.
 * 
 *   Cuando dos o más tareas progresan simultáneamente.
 *   es decir que mediante avanza el tiempo se van ejecutando.
 *   de manera automatica. 
 * 
 * 
 * - Operaciones Bloqueantes y no Bloqueantes.
 *   Una operación bloqueante es aquella que no va ha
 *   devolver el control hasta que haya terminado toda su tarea.
 * 
 *   Una operación no bloqueante es aquella que se ejecutan y devuleven 
 *   el control al hilo principal sin importar si han terminado o no la tarea
 *   en el momento que una tarea no bloquenate se acabe mandara una notificacion
 *   y luego se avisara al hilo pricipal.
 */

/**
 * Código Síncrono Bloqueante
 */

(() => {
  console.log(`Código Síncrono`);
  console.log(`Ìnicio`);

  function dos() {
    console.log(`Dos`);
  }

  function uno() {
    console.log(`Uno`);
    dos();
    console.log(`Tres`);
  }

  uno();
  console.log(`Fin`);
})(); 

console.log(`*********************`);

/**
 *  * Código Asíncrono No Bloqueante
 */

(() => {
  console.log(`Código Asíncrono`);
  console.log(`Inicio`);

  function dos() {
    setTimeout(function () {
      console.log(`Dos`);
    }, 1000);
  }

  function uno() {
    setTimeout(function() {
      console.log(`Uno`);
    }, 0);
    dos();
    console.log(`Tres`);
  }

  uno();
  console.log(`Fin`);
})();