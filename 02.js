<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
   </head>
  <body>
     <button class="button" onClick=result()>
          <div class="btn_text">Размер экрана</div>
           <div class="btn_icon greenIcon">
            <svg class="grn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"/>
           </svg>
          </div>
          </div>
        </button>   
 <script>
   function result() {
      let width = window.screen.width;
      let height = window.screen.height;
           alert(`Размер экрана: Ширина - ${width}px, высота - ${height}px.`);
   }
  </script>
      </body>
</html>

