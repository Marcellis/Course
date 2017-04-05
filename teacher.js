(function () {
            $(document).ready(function(){
                check = function(){
                    if($('#password').val() == "mad2016"){
                        console.log('klopt!');
                        $("#securewall").hide('fast', function(){
                            $(".secure").show('fast');
                            
                        });
                        
                    }
                }
            });
})();