$(document).ready(function() {
  CFInstall.check({
      onmissing: function() {
          // $('body').prepend('<div id="chrome_msg"><a onclick="hideChromeMsg();" href="#" id="msg_hide">X</a>This website requires capabilities not supported by your browser. Please install <a href="#" onclick="loadPlugin();">Google Chrome Frame Plugin</a>.</div>');
          // $('#chrome_msg').slideDown(500)
      },
      preventPrompt: true,
      oninstall: function() {
        alert("Chrome Frame is now Installed! Click OK to start the slide show");
        // window.location = "http://mac.dev:4000/?reload#mac";
        window.location = "http://ifiwouldhaveknownjustonething.com/?reload#mac"
      }
  })
});
