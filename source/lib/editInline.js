var editInline = (function(){
    var redDot = $("<span style='position:fixed; top:5px; right: 5px; border-radius: 5px; background:red; z-index:1500; padding:3px; opacity:.85;color:#fff; font-size:8px;'>Editing</span>")

    function inlineEditor(){
        this.enable = function(){
            var anchors = document.getElementsByTagName("a");
            for (var i in anchors){
                anchors[i].href= "javascript:void(0)"; 
            }
            $("h1,h2,h3,h4,h5,h6,p,a").editable(function(value, settings) {
                return(value);
            });
            $("div,span").filter(function()
            {
                var $this = $(this);
                return $this.find(":not(h1,h2,h3,h4,h5,h6,p,i,a)").children().length == 0 && $.trim($this.text()).length > 0;
            }).editable(function(value, settings) {
                return(value);
            });
            $("body").append(redDot);
        }
    }

    return new inlineEditor();

})()

