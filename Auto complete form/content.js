//content.js

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {

	switch ( request.action ) {
		case 'ivta-test-register-f2':
				var el = document.getElementsByClassName('fw-text-input')
				if (el) {
					for (var i = 0; i < el.length; ++i) {
						if (el[i].dataset.id == "numeric") el[i].value = "0804812345";
						else if (el[i].dataset.id == "email") el[i].value = "autoinput@email.com";
						else el[i].value = "ขอมูล ตรวจสอบ";
					}
				}
				break;
		case 'ivta-test-register':
				var form = document.getElementById('ivta_register_form');
				if (form) {
					var el = form.getElementsByTagName('input');
					for (var i = 0; i < el.length; ++i) {
						if (el[i].type == "email") el[i].value = "skborey.dev@gmail.com";
						else if (el[i].id=='ivta_register_pass' || el[i].id=='ivta_register_confirm_pass') el[i].value = "aaa123";
						else if (el[i].id != 'ivta_register_submit_btn' ) el[i].value = "a";
					}

					var sel = form.getElementsByTagName('select');
					for (var i = 0; i < sel.length; ++i) {
						var opt = sel[i].getElementsByTagName('option')[1];

						if (opt) opt.setAttribute('selected', '');
					}
				}
				break;
	}
});