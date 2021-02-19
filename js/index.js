$("#wrap").one("click", function() {
        
    console.log("222222");
    // $(".loadImg").addClass("anim")
    // $(".loadDiv").show()
    // $(".cli").hide();
    $(".page2").css("opacity", 1);
            $("#my-video").css("opacity", 0);
            if (!navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                $("my-video").prop('muted', false);
                }
            document.getElementById("my-video").play();
            // $("#my-video").$refs.videoEle.play();
           
            window.setTimeout(function() {
                $("#my-video").css("opacity", 1);
                $(".page1").hide();
                $(".mask").hide()
            }, 300)

    // window.setTimeout(function(){
    //     $(".page2").css("opacity", 1);
    //         $("#my-video").css("opacity", 0);
    //         document.getElementById("my-video").play();
    //         // $("#my-video").$refs.videoEle.play();
           
    //         window.setTimeout(function() {
    //             $("#my-video").css("opacity", 1);
    //             $(".page1").hide();
    //             $(".mask").hide()
    //         }, 300)
    // }, 1500);

    window.setTimeout(function(){
        document.getElementById("my-video").pause();
        $(".page3").slideDown(300);
    },6000);

})


 $("#app").one("click",function(){
    console.log("1111111");
    document.getElementById("my-video").pause();
    $(".page3").slideDown(300);
 });

 



    