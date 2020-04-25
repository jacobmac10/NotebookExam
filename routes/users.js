var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
/*<% if (entries.length) { %>
    <% entries.forEach(function(entry){ %>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <%= entry.title %>
         <div class="pull-right">
          <%= entry.published  %> 
         </div> 
        </div>
       <div class="panel-body">
         <% entry.content %> 
       </div>
      </div>
    <% }) %>  
    <% }else{ %>
    <p>No existen entradas</p>

 <% } %> */