//*********************** HTTP SERVICES ********************************

/*
HTTP POST
*/
function caribedev_create(body, entity, callback) {
  var url = server + entity;
  $.ajax({
    method: "POST",
    url: url,
    data: body
  })
  .success(function (data) {
    callback(data);
  })
  .error(function(data){
    alert(data.message_detail);
  });
}

function caribedev_request_error(data) {
  alert(data.message_detail);
}

function caribedev_request_ok(data, path) {
  alert(data.message_detail);
  window.location.href = path;
}


/*
HTTP GET (ALL)
*/
function caribedev_list(entity, callback) {
  var url = server + entity;
  $.ajax({
    method: "GET",
    url: url,
    async: false
  })
  .success(function (data) {
    callback(data);
  })
  .error(function (data) {
    alert("Unexpected Error");
  });
}

/*
HTTP DELETE
*/
function caribedev_delete(entity, uuid, callback) {
  var url = server + entity + uuid;
  $.ajax({
    method: "DELETE",
    url: url
  })
  .success(function (data) {
    callback(data);
  })
  .error(function (data) {
    alert("Unexpected Error");
  });
}

/*
HTTP GET (BY UUID)
*/
function caribedev_read(entity, uuid, callback) {
  var url = server + entity + uuid;
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json", 
    async: false
  })
  .success(function (data) {
    callback(data);
  })
  .error(function (data) {
    alert("Unexpected Error");
  });
}

/*
HTTP PUT
*/
function caribedev_update(body, entity, uuid, callback) {
  var url = server + entity + uuid;
  $.ajax({
    type: "PUT",
    url: url,
    contentType: "application/x-www-form-urlencoded",
    data: body
  })
  .success(function (data) {
    callback(data);
  })
  .error(function(data){
    alert("Unexpected Error");
  });
}
