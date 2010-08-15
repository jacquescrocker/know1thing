/*

USAGE:

Simply paste the following code into your <head></head> section and customize as needed...
(Don't forget, this requires the jQuery core to run, so make sure to include that as well).

------------------------------------------------------------------------------------------


<!--[if IE]>
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script>
<script type="text/javascript" src="PATH_TO/jquery.chrome_frame.js"></script>
<style>
#chrome_msg { display:none; position: fixed; top: 0; left: 0; background: #ece475; border: 2px solid #666; border-top: none; font: bold 11px Verdana, Geneva, Arial, Helvetica, sans-serif; line-height: 100%; width: 100%; text-align: center; padding: 5px 0; margin: 0 auto; }
#chrome_msg a, #chrome_msg a:link { color: #a70101; text-decoration: none; }
#chrome_msg a:hover { color: #a70101; text-decoration: underline; }
#chrome_msg a#msg_hide { float: right; margin-right: 15px; cursor: pointer; }
* html #chrome_msg { left: auto; margin: 0 auto; border-top: 2px solid #666;  }
</style>
<![endif]-->


------------------------------------------------------------------------------------------

*/

function hideChromeMsg() {
    $('#chrome_msg').slideUp(300);
    function setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "": ";expires=" + exdate.toGMTString())
    }
    setCookie('cfmsg', '1', 30)
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
$(document).ready(function() {
    cfmsg = getCookie('cfmsg');
    if (cfmsg == null || cfmsg == "") {
        CFInstall.check({
            node: "chrome_msg",
            onmissing: function() {
                // $('body').prepend('<div id="chrome_msg"><a onclick="hideChromeMsg();" href="#" id="msg_hide">X</a>This website requires capabilities not supported by your browser. Please install <a href="#" onclick="loadPlugin();">Google Chrome Frame Plugin</a>.</div>');
                // $('#chrome_msg').slideDown(500)
            },
            preventPrompt: true,
            oninstall: function() {
                window.location.reload()
            }
        })
    }
});
