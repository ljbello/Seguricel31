//var server = "http://caribedev-caf-firban-firban-service.azurewebsites.net";
var server = "http://localhost:8081/bigfifty/";
var server_image = '37.58.102.237';
//
// //Disable buttons for 3 seconds prevent dobleclick
// $(":button").click(function() {
// 	var button_obj = $(this);
// 	button_obj.attr("disabled", true);
// 	setTimeout(function(){
// 		button_obj.attr("disabled", false);
// 	},3000);
// });
//
//
// //QueryString Params
(function($) {
	$.QueryString = (function(a) {
		if (a == "") return {};
		var b = {};
		for (var i = 0; i < a.length; ++i)
		{
			var p=a[i].split('=');
			if (p.length != 2) continue;
			b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
		}
		return b;
	})(window.location.search.substr(1).split('&'))
})(jQuery);

function format_date(date) {

	if(date != null){
		var d = new Date(date)

		var mm = d.getMonth()+1; // getMonth() is zero-based
		var dd = d.getDate();

		var date_return = [
			d.getFullYear(),
			(mm>9 ? '' : '0') + mm,
			(dd>9 ? '' : '0') + dd

		].join('-');
	}else{
		var date_return = '';
	}

	return date_return;
}

function format_time(string_date) {
	var _time = new Date(string_date);

	h = (_time.getHours().toString().length < 2 ? '0' + _time.getHours().toString() : _time.getHours().toString());
	m = (_time.getMinutes().toString().length < 2 ? '0' + _time.getMinutes().toString() : _time.getMinutes().toString());

	return h + ':' + m ;

}

function get_text(field, value){

	var text = "";

	if(field == "ACC_Type"){

		switch (value) {
			case 0:
			text = "N/A";
			case 1:
			text = "Activa bancaria";
			break;
			case 2:
			text = "Pasiva bancaria";
			break;
			case 3:
			text = "Assest Managment";
			break;
			case 4:
			text = "Dummy";
			break;
		}

	}

	if(field == "ACC_FrequencyConciliation"){

		switch(value){
			case 1:
			text = "Diaria";
			break;
			case 2:
			text = "Mensual";
			break;
			case 3:
			text = "Semanal";
			break;
			case 4:
			text = "Quincenal";
			break;
		}

	}

	if(field == "ACC_Status"){

		switch(value){
			case 1:
			text = "Activa";
			break;
			case 2:
			text = "";
			break;
			case 3:
			text = "Cerrada";
			break;
			case 4:
			text = "";
			break;
		}

	}
	return text;

}


/*
* Notifications
*/
function notify(from, align, icon, type, animIn, animOut, msg) {
    $.growl({
        icon: icon,
        title: '',
        message: msg,
        url: ''
    }, {
        element: 'body',
        type: type,
        allow_dismiss: true,
        placement: {
            from: from,
            align: align
        },
        offset: {
            x: 20,
            y: 85
        },
        spacing: 10,
        z_index: 1031,
        delay: 3000,
        timer: 1000,
        url_target: '_blank',
        mouse_over: false,
        animate: {
            enter: animIn,
            exit: animOut
        },
        icon_type: 'class',
        template: '<div data-growl="container" class="alert" role="alert">' +
                        '<button type="button" class="close" data-growl="dismiss">' +
                            '<span aria-hidden="true">&times;</span>' +
                            '<span class="sr-only">Close</span>' +
                        '</button>' +
                        '<span data-growl="icon"></span>' +
                        '<span data-growl="title"></span>' +
                        '<span data-growl="message"></span>' +
                        '<a href="#" data-growl="url"></a>' +
                    '</div>'
    });
};

function getParam(key) {
	// Find the key and everything up to the ampersand delimiter
	var value = RegExp("" + key + "[^&]+").exec(window.location.search);

	// Return the unescaped value minus everything starting from the equals sign or an empty string
	return unescape(!!value ? value.toString().replace(/^[^=]+./, "") : "");
}
