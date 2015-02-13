window.onload = function() {
	var qrcodeContainer = document.getElementById('qrcode');
	var qrcode = new QRCode(qrcodeContainer, {
	    width: 175,
	    height: 175,
	});
	qrcode.makeCode(window.location.href);
}