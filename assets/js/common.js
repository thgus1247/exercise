/*common*/


var leftMenu = {
        //오류시 메세지
        message: false,
        //이벤트를 바인딩한다.
        doBind: function() {
            
            var p = this; 
 
            p.setMenu();
        },
        //메뉴 생성
        setMenu: function(event) {

            var thisElm = $("#left-menu");

            if(!thisElm.length)
            	return;

            thisElm.html('');

            var logo ='';
            logo += '<div class="logo"><a href="str_1.html" class="simple-text"> INDOOR EXCERCISE LIST</a></div>';

            var menu = '';
            menu += '<ul class="nav">'
            menu += '<li><a href="str_1.html"><i class="pe-7s-airplay"></i><p>기본스트레칭</p></a></li>'
		    menu += '<li><a href="str_2.html"><i class="pe-7s-airplay"></i><p>골반교정스트레칭A</p></a></li>'
		    menu += '<li><a href="str_2.html"><i class="pe-7s-airplay"></i><p>골반교정스트레칭B</p></a></li>'
		    menu += '</ul>';

            thisElm.append(logo + menu);
        } 
};



$(function() {

    //로그인 이벤트 바인딩
    leftMenu.doBind();
 
     
});
