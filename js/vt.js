var str = '';
var intervalId = 0;
var now = 0;
var ang = 0;
function init(){
	setTimeout('go()',2000);
}
function go(){
	intervalId = setInterval('getViewPoint()',50);
}
function getViewPoint(){

	now = document.viewer.pan();
	ang = parseInt(now);
	$('#arrow').rotate(ang,[whence=0])
	
}
function loadVT(num){

	var vthtml = '<APPLET id="viewer" archive="http://www.lafontanatwyford.com/dev/content/ptviewer.jar" code="ptviewer.class" width="400" height="300" mayscript="true">' +
				'<PARAM name="file" value="../images/pano'+num+'.jpg">' +
				'<PARAM name="wait" value="../images/loading.gif">' +
				'<PARAM name="waittime" value="500">' +
				'<PARAM name="frame" value="../images/vtbr.png">' +
				'<PARAM name="barcolor" value="FF6600">' +
				'<PARAM name="quality" value="3">' +
				'<PARAM name="auto" value="0.2">' +
				'<PARAM name="bgcolor" value="FFFFFF">' +
				'</APPLET>';

	$('#vt-viewer').html(vthtml);
}



