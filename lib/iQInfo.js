

var iQInfo = (function() {
    //Singleton variables
    var showIqInfoEnabled = false;

    function iQInfoClass (){
        function iQInfoElement(info_string){
            return $('<div class="iq-info-div"><div class="iq-info-div-container">'+info_string+'</div></div>').get(0);
        }
        function showIqInfo(){
            showIqInfoEnabled = true;
            $(".iq-img").each(function(index,elm){
                var infoString = '';
                var desktopSourceUrl = $(elm).data("src-desktop").replace("wid="+getURLParameter($(elm).data("src-desktop"), "wid"), "scl=1");
                var tabletSourceUrl = $(elm).data("src-tablet").replace("wid="+getURLParameter($(elm).data("src-tablet"), "wid"), "scl=1");
                var phoneSourceUrl = $(elm).data("src-phone").replace("wid="+getURLParameter($(elm).data("src-phone"), "wid"), "scl=1");

                var wid= "", widPrefix = "w:", hei = "", heiPrefix = "h:";

                (getURLParameter($(elm).data("src-desktop"), "wid")!= "null")? wid = widPrefix+getURLParameter($(elm).data("src-desktop"), "wid"): "";
                (getURLParameter($(elm).data("src-desktop"), "hei")!= "null")? hei = heiPrefix+getURLParameter($(elm).data("src-desktop"), "hei"): "";
                infoString += "<span class='p2'>Desktop:</span> <a title='Non-retina size' href=\""+$(elm).data("src-desktop")+"\" target=\"_blank\">"+ wid+" "+hei + "px</a>, ";
                (getURLParameter($(elm).data("src-desktop-highres"), "wid")!= "null")? wid = widPrefix+getURLParameter($(elm).data("src-desktop-highres"), "wid"): "";
                (getURLParameter($(elm).data("src-desktop-highres"), "hei")!= "null")? hei = heiPrefix+getURLParameter($(elm).data("src-desktop-highres"), "hei"): "";
                infoString += "<a title='Retina size' href=\""+$(elm).data("src-desktop-highres")+"\" target=\"_blank\">"+ wid+" "+hei + "px(2x)</a>, ";
                infoString += "<a title='See original size' href=\""+desktopSourceUrl+"\" target=\"_blank\">scl=1</a>, <br>";
                //
                (getURLParameter($(elm).data("src-tablet"), "wid")!= "null")? wid = widPrefix+getURLParameter($(elm).data("src-tablet"), "wid"): "";
                (getURLParameter($(elm).data("src-tablet"), "hei")!= "null")? hei = heiPrefix+getURLParameter($(elm).data("src-tablet"), "hei"): "";
                infoString += "<span class='p2'>Tablet:</span> <a title='Non-retina size' href=\""+$(elm).data("src-tablet")+"\" target=\"_blank\">"+ getURLParameter($(elm).data("src-tablet"), "wid") + "px</a>, ";
                (getURLParameter($(elm).data("src-tablet-highres"), "wid")!= "null")? wid = widPrefix+getURLParameter($(elm).data("src-tablet-highres"), "wid"): "";
                (getURLParameter($(elm).data("src-tablet-highres"), "hei")!= "null")? hei = heiPrefix+getURLParameter($(elm).data("src-tablet-highres"), "hei"): "";
                infoString += "<a title='Retina size' href=\""+$(elm).data("src-tablet-highres")+"\" target=\"_blank\">"+ getURLParameter($(elm).data("src-tablet-highres"), "wid")+ "px(2x)</a>, ";
                infoString += "<a title='See original size' href=\""+tabletSourceUrl+"\" target=\"_blank\">scl=1</a>, <br>";
                //
                (getURLParameter($(elm).data("src-phone"), "wid")!= "null")? wid = widPrefix+getURLParameter($(elm).data("src-phone"), "wid"): "";
                (getURLParameter($(elm).data("src-phone"), "hei")!= "null")? hei = heiPrefix+getURLParameter($(elm).data("src-phone"), "hei"): "";
                infoString += "<span class='p2'>Phone:</span> <a title='Non-retina size' href=\""+$(elm).data("src-phone")+"\" target=\"_blank\">"+ getURLParameter($(elm).data("src-phone"), "wid") + "px</a>, ";
                (getURLParameter($(elm).data("src-phone-highres"), "wid")!= "null")? wid = widPrefix+getURLParameter($(elm).data("src-phone-highres"), "wid"): "";
                (getURLParameter($(elm).data("src-phone-highres"), "hei")!= "null")? hei = heiPrefix+getURLParameter($(elm).data("src-phone-highres"), "hei"): "";
                infoString += "<a title='Retina size' href=\""+$(elm).data("src-phone-highres")+"\" target=\"_blank\">"+ getURLParameter($(elm).data("src-phone-highres"), "wid")+ "px(2x)</a>, ";
                infoString += "<a title='See original size' href=\""+phoneSourceUrl+"\" target=\"_blank\">scl=1</a>";
                //
                var newElement = iQInfoElement(infoString);
                $(elm).before(newElement);
            })
        }
        function hideIqInfo(){
            showIqInfoEnabled = false;
            $(".iq-info-div").remove();
        }
        function getURLParameter(string, name) {
            return decodeURI(
                (RegExp(name + '=' + '(.+?)(&|$)').exec(string)||[,null])[1]
            );
        }
        this.showIqInfo = function(){
            showIqInfo()
        }
        this.hideIqInfo = function(){
            hideIqInfo();
        }
        this.toggleImageInfo = function(){
            (!showIqInfoEnabled)? showIqInfo():hideIqInfo();
        }
    }

    return new iQInfoClass();
})();