var URLManipulator = (function(){
    //Class return
    function URLManipulator(url_link){
        this.url = url_link;
        this.updateParam = function(key, value){
            return this.url  = updateQueryStringParameter(this.url, key, value);
        },
        this.removeParamString = function(param_string){
            return this.url = this.url.replace("?"+param_string,"") || this.url.replace("&"+param_string,"");;
        }
        return this;
    }
    // Uility functions
    function updateQueryStringParameter(uri, key, value) {
      var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
      separator = uri.indexOf('?') !== -1 ? "&" : "?";
      if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
      }
      else {
        if (uri.indexOf("#")>-1)
            return [uri.slice(0, uri.indexOf("#")), separator + key + "=" + value, uri.slice(uri.indexOf("#"))].join('');
        else
            return uri + separator + key + "=" + value;
      }
    }
    // URLManipulator API
    return api =  {
        create: function(url_link){
            return new URLManipulator(url_link);
        }
    }
})();



var urlObject;

function refreshPage(url){
  chrome.tabs.executeScript(null,
  {code:"window.location.href='"+url+"'"});
}
function enableClick(e) {
  urlObject.updateParam("failsafe", "true");
  refreshPage(urlObject.url);
  window.close()
}

function disableClick(e) {
  window.close()
}

function enableDisableImageWidths(e){
  var exec_script = "iQInfo.toggleImageInfo()";
  chrome.tabs.executeScript(null,
      {code:exec_script});

  window.close()
}

function disableImageWidths(e){
  // window.close()
}
var iQInfoDisplay = false
$(document).on("ready", function(e){
   chrome.tabs.getSelected(null,function(tab) {

    urlObject = URLManipulator.create(tab.url); 
    if (urlObject.url.indexOf("failsafe=true") == -1){
        $("#failsafe").on("click", enableClick)
    }else{
        $("#failsafe").addClass("disabled");
        $("#failsafe").on("click", disableClick);
    }
    $("#seeImageWidths").on("click", enableDisableImageWidths);
  });
})


