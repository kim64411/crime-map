var browerType   =""; // 브라우져 종류
var browerWidth  =""; //broser 가로크기

// 차트 뷰 다시 그림. // 
function chartview_redraw() {
	if( chart01 != null ) chart01.destroy(); 
	if( chart02 != null ) chart02.destroy(); 
	if( chart03 != null ) chart03.destroy(); 
	if( chart04 != null ) chart04.destroy(); 

	if(chart01_opt != null) chart01 = new Highcharts.Chart(chart01_opt); 
	if(chart02_opt != null) chart02 = new Highcharts.Chart(chart02_opt); 
	if(chart03_opt != null) chart03 = new Highcharts.Chart(chart03_opt); 
	if(chart04_opt != null) chart04 = new Highcharts.Chart(chart04_opt); 
}



// 기본정보 slide // 
$(function() {
	browerWidth = $(window).width(); 
	
	
	$(".info").click(function(){
//		if($(".info_view").css("display")=="block") {
//			$(this).removeClass("click_bg");
//			$(".info_view").slideUp("slow");
//		} else {
//			$(".info_view").slideDown("slow");
//			$(this).addClass("click_bg");
//		}		
		$("div").removeClass("click_bg");
		if($(".info_view").css("display")=="block") {
			$(this).removeClass("click_bg");
			$(".info_view").slideUp("fast");
		} else {
			$(".info_view").slideDown("fast");
			$(this).addClass("click_bg");
			$(".disa_view").hide();
			$(".life_view").hide();
			$(".traf_view").hide();
			$(".social_view").hide();
		}	
	});
});

// 재난 slide // 
$(function() { 
	$(".disaster").click(function(){
		$("div").removeClass("click_bg");
		if($(".disa_view").css("display")=="block") {
			$(this).removeClass("click_bg");
			$(".disa_view").slideUp("fast");
		} else {
			$(".disa_view").slideDown("fast");
			$(this).addClass("click_bg");
			$(".info_view").hide();
			$(".life_view").hide();
			$(".traf_view").hide();
			$(".social_view").hide();
		}	
	});
});

// 생활 slide // 
$(function() { 

	$(".life").click(function(){
		$("div").removeClass("click_bg");
		if($(".life_view").css("display")=="block") {
			$(this).removeClass("click_bg");
			$(".life_view").slideUp("fast");
		} else {
			$(".life_view").slideDown("fast");
			$(this).addClass("click_bg");
			$(".info_view").hide();
			$(".disa_view").hide();
			$(".traf_view").hide();
			$(".social_view").hide();
		}
		
	});
});

// 교통사고 slide // 
$(function() { 

	$(".traffic").click(function(){
		$("div").removeClass("click_bg");
		if($(".traf_view").css("display")=="block") {
			$(this).removeClass("click_bg");
			$(".traf_view").slideUp("fast");
		} else {
			$(".traf_view").slideDown("fast");
			$(this).addClass("click_bg");
			$(".info_view").hide();
			$(".disa_view").hide();
			$(".life_view").hide();
			$(".social_view").hide();
		}
	
	});
});

// 사회 slide // 
$(function() { 

	$(".social").click(function(){
		$("div").removeClass("click_bg");
		if($(".social_view").css("display")=="block") {
			$(this).removeClass("click_bg");
			$(".social_view").slideUp("fast");
		} else {
			$(".social_view").slideDown("fast");
			$(this).addClass("click_bg");
			$(".info_view").hide();
			$(".disa_view").hide(); 
			$(".traf_view").hide();
			$(".life_view").hide();
		}
	
	});
	
	
});


// 투명도 조절 slide // 
$(function() { 

	$(".bar").click(function(){
	if($(".bar_back").css("display")=="block") {
		$(this).removeClass("click_bg");
		$(".bar_back").slideUp("fast");
	} else {
		$(".bar_back").slideDown("fast");
		$(this).addClass("click_bg");
	}
	
	});
});

// 관심지역 slide // 
$(function() { 

	$(".interest").click(function(){
	if($(".interest_view").css("display")=="block") {
		$(this).removeClass("click_bg");
		$(".interest_view").slideUp("fast");
	} else {
		$(".interest_view").slideDown("fast");
		$(this).addClass("click_bg");
	}
	
	});
});

// ui // 
$(function() {
	if(browerWidth >= 1240){
		$( "#slider" ).slider();
	}
});


$(function(){	
	$("#list_Lnew #rollover li").click(function(){		
		$(this).parent().find("li").removeClass("on");
		$(this).addClass("on");
	});
});




// tab_view // 
$(function(){	
	$(".view_tab li").click(function(){
		
		$(this).parent().find("li").removeClass("on");
		$(this).addClass("on");
		
	});

});



//top function // 
$(function(){	
	$(".view_contr #contrbtn").click(function(){
		
		$(this).parent().find("li").removeClass("on");
		$(this).addClass("on");
		
		if($(this).index() == 1){
			fn_open_commpop();
		}else if($(this).index() == 3){
			
		}else{
			
		}
		
	});

});


//dime_view // 
$(function(){	

	$("#map2dB").click(function(){
		fn_change_2d('B');
	});
	$("#map2dH").click(function(){
		fn_change_2d('H');
	});
	$("#map2dN").click(function(){		
		fn_change_2d('N');
	});
	$("#map3d").click(function(){
		fn_change_3d();
	});
	
	//교통현황 정보
	$("#icon_over1").click(function(){
		$("#chk_icon_over1").prop('checked', !$("#chk_icon_over1").prop('checked'));
		if( $('#chk_icon_over1').prop('checked') == true ){
			STD_LINK_mode(true);
			$("#icon_over1").attr('class', 'btn_mapset on');
		}else{
			STD_LINK_mode(false);
			$("#icon_over1").attr('class', 'btn_mapset');
		}
		mapLayerOpacity('icon_over1');
		
	});
	//화면분할
	$("#icon_over2").click(function(){
		$("#chk_icon_over2").prop('checked', !$("#chk_icon_over2").prop('checked'));
		if( $('#chk_icon_over2').prop('checked') == true ){
			$("#icon_over2").attr('class', 'btn_mapset on');
			$('#map_view_on').click();
			swipeMode();
		}else{
			$("#icon_over2").attr('class', 'btn_mapset');
			swipeMode();
		}
		mapLayerOpacity('icon_over2');
	});

});


function fn_change_2d(map) {
   /*
   var zmlv = smap.getZoom();
   var lonlat = smap.getCenter();

   $('#mpLn').val(lonlat.lon);
   $('#mpLt').val(lonlat.lat);
   $('#zmLv').val(zmlv);
   $('#mMode').val("d2");
   $('#changeModForm').attr('action', '/main/smap.do?flag=2');
   //$('#changeModForm').submit();
   */
   if(map == "B"){
	   var layer = smap.getLayersByName("VWORLD 영상지도")[0];
	   layer.setVisibility(false);
	   $("input:checkbox[id='baselayer0']").prop("checked",true);
	   $("input:checkbox[id='baselayer1']").prop("checked",false);
	   $("input:checkbox[id='baselayer2']").prop("checked",false);
	   $("input:checkbox[id='baselayer4']").prop("checked",false);
	   baseMapToggle('VWORLD 배경지도');	   
	   $("#naverBtn").prop("src","/img/naver.png");
   }else if(map == "H"){
	   $("input:checkbox[id='baselayer0']").prop("checked",true);
	   $("input:checkbox[id='baselayer1']").prop("checked",true);
	   $("input:checkbox[id='baselayer2']").prop("checked",false);
	   $("input:checkbox[id='baselayer4']").prop("checked",false);
	   baseMapToggle('VWORLD 영상지도');
	   $("#naverBtn").prop("src","/img/naver.png");
   }else if(map == "N"){	   
	   $("input:checkbox[id='baselayer0']").prop("checked",false);
	   $("input:checkbox[id='baselayer1']").prop("checked",false);
	   $("input:checkbox[id='baselayer2']").prop("checked",false);
	   $("input:checkbox[id='baselayer4']").prop("checked",true);
	   baseMapToggle('Naver Map');	   
	   $("#naverBtn").prop("src","/img/naver_over.png");
   }
}	

function fn_change_3d() {

   var zmlv = smap.getZoom();
   var lonlat = smap.getCenter();
   
   $('#mpLn').val(lonlat.lon);
   $('#mpLt').val(lonlat.lat);
   $('#zmLv').val(zmlv);
   $('#mMode').val("d2");
//   for(var i=1; i<=8;i++){
//	   if($('.mtab_v'+i).attr('class').indexOf('on')!=-1){
//		   $('#viewnum').val(i);
//	   }
//   }
   $('#changeModForm').attr('action', '/3dmap/3dview.do');
   $('#changeModForm').submit();

}	





// 정보부분 slide // 
$(function() { 

	$(".info_disa").click(function(){
		$("div").removeClass("click_bg");
		if($(".info_disa_view").css("display")=="block") {
			$(this).removeClass("click_bg");
			$(".info_disa_view").slideUp("fast");
		} else {
			$(".info_disa_view").slideDown("fast");
			$(this).addClass("click_bg");
			$(".info_life_view").hide(); 
			$(".info_social_view").hide();
			$(".info_traf_view").hide();
		}
	});
	
});

$(function() { 

	$(".info_life").click(function(){
		$("div").removeClass("click_bg");
		if($(".info_life_view").css("display")=="block") {
			$(this).removeClass("click_bg");
			$(".info_life_view").slideUp("fast");
		} else {
			$(".info_life_view").slideDown("fast");
			$(this).addClass("click_bg");
			$(".info_disa_view").hide(); 
			$(".info_social_view").hide();
			$(".info_traf_view").hide();
		}
	});
});

$(function() { 

	$(".info_social").click(function(){
		$("div").removeClass("click_bg");
		if($(".info_social_view").css("display")=="block") {
			$(this).removeClass("click_bg");
			$(".info_social_view").slideUp("fast");
		} else {
			$(".info_social_view").slideDown("fast");
			$(this).addClass("click_bg");
			$(".info_disa_view").hide(); 
			$(".info_life_view").hide();
			$(".info_traf_view").hide();
		}
	});
});

$(function() { 

	$(".info_traf").click(function(){
		$("div").removeClass("click_bg");
		if($(".info_traf_view").css("display")=="block") {
			$(this).removeClass("click_bg");
			$(".info_traf_view").slideUp("fast");
		} else {
			$(".info_traf_view").slideDown("fast");
			$(this).addClass("click_bg");
			$(".info_disa_view").hide(); 
			$(".info_life_view").hide();
			$(".info_social_view").hide();
		}
	});
});

$(function() {
	// 기본레이어 시간변화 play, stop버튼.
	$(".lay_cont10_paly li").click(function(){		
		$(this).parent().find("li").removeClass("on");
		$(this).addClass("on");
	});
	
	$(".lay_cont11_paly li").click(function(){		
		$(this).parent().find("li").removeClass("on");
		$(this).addClass("on");
	});
});

$(function() {
	// 초기화 버튼.
	$('.btn_refresh').click(function(){
		checkedClear();
	});
	// 
	$('#_close').on('click',function(){
		smap.removePopup(smap.popups[0]);
	});
	
	$('#sc_map_panels input[type=checkbox]').on('change',function() {
		if (smap.popups.length > 0){
			smap.removePopup(smap.popups[0]);
		}
		
		layerCnt = 0;
		var layerId = $(this);
		$('input[type=checkbox]').each(function(){
			if( $(this).prop('checked') == true ) {
				if( $(this).attr('id') != 'baselayer0' &&
						$(this).attr('id') != 'baselayer1' &&
						$(this).attr('id') != 'baselayer2' &&
						$(this).attr('id') != 'baselayer3' &&
						$(this).attr('id') != 'baselayer4' &&
						$(this).attr('id') != 'baselayer5' ){
					regionRateClear();
					layerCnt = layerCnt +1;
//					if (layerCnt > 2){
//						alert('7개 이상 서비스를 호출 할 수 없습니다. 체크박스 해제 후 진행해 주시기 바랍니다.');
//						return false;
//					}
				}
			}
		});
	});

	$('#sc_map_panels2 input[type=checkbox]').on('change',function() {
		if (smap.popups.length > 0){
			smap.removePopup(smap.popups[0]);
		}
		
		layerCnt = 0;
		var layerId = $(this);
		$('input[type=checkbox]').each(function(){
			if( $(this).prop('checked') == true ) {
				if( $(this).attr('id') != 'baselayer0' &&
						$(this).attr('id') != 'baselayer1' &&
						$(this).attr('id') != 'baselayer2' &&
						$(this).attr('id') != 'baselayer3' &&
						$(this).attr('id') != 'baselayer4' &&
						$(this).attr('id') != 'baselayer5' ){
					regionRateClear();
					layerCnt = layerCnt +1;
//					if (layerCnt > 2){
//						alert('7개 이상 서비스를 호출 할 수 없습니다. 체크박스 해제 후 진행해 주시기 바랍니다.');
//						return false;
//					}
				}
			}
		});
	});
	
	$('#location').on('mousedown',function(){
		$('.select_location_table_wrap').css("display","block");
		$('#locationinfo')[0].onclick();
	});

});

function checkedClear(){
	
	if($('.children_safe')[0].className.indexOf('show_on_top')>-1){		
		$('#closeBtn').click();
	}
	
	measureReset(); //거리면적
	if ($('#view_layer_pop2')[0].className.indexOf('show_on_top')>-1){
		$('#view_layer_pop2').children().children()[0].children[1].click();
		$('.map_poi_gps_sub').removeClass('show_on_top');
	}
	
	if ($('#view_layer_pop3')[0].className.indexOf('show_on_top')>-1){
		$('#view_layer_pop3').children().children()[0].children[1].click();
		$('.map_poi_gps_sub').removeClass('show_on_top');
	}
	if ($('#view_layer_pop').hasClass('show_on_top')){
		$('#view_layer_pop').children().children()[0].children[1].click();
		$('.map_poi_gps_sub').removeClass('show_on_top');
	}
	searchBbox = "";
	searchLeft = "";
	searchBottom = "";
	searchRight = "";
	searchTop = "";

	if (smap.popups.length > 0){
		smap.removePopup(smap.popups[0]);
	}
	
	clearPoi();//poi초기화
	showHideLayers();//실시간초기화
	regionRateClear();//지역안전지수초기화
	
	for (var i=0;i<$('.outer').children().length;i++){
		for(var k=0;k<$('.outer').children().eq(i).children().length;k++){
			if($('.outer').children().eq(i).children().eq(k).hasClass('on')){
				$('.outer').children().eq(i).children().eq(k).removeClass('on');
			}
		}
	}
	
	$('input[type=checkbox]').each(function(){
		if( $(this).prop('checked') == true ) {
			if( $(this).attr('id') != 'baselayer0' &&
				$(this).attr('id') != 'baselayer1' &&
				$(this).attr('id') != 'baselayer2' &&
				$(this).attr('id') != 'baselayer3' &&
				$(this).attr('id') != 'baselayer4' &&
				$(this).attr('id') != 'baselayer5' ){
				var id = $(this).attr('id');
				id = '#'+id; 
				
				$(id).click();
			}
		}
	});
	
	if(smap.getLayersByName("polygonLayer")[0]){
		smap.removeLayer(smap.getLayersByName("polygonLayer")[0]);
		if(polygonControl["cycle"]){
			polygonControl["cycle"].deactivate();
		}
		if(polygonControl["line"]){
			polygonControl["line"].deactivate();
		}
		
		smap.events.unregister('mouseup', smap, loding);
	}
	
	if(smap.getLayersByName("polygonLayer2")[0]){
		smap.removeLayer(smap.getLayersByName("polygonLayer2")[0]);
		if(polygonControl["line"]){
			polygonControl["line"].deactivate();
		}
	}
	
	$('#view_layer_pop').hide();
	safetyZone = false;
	safetyZoneFunc();
	if($('#scLegendWrap')[0].className.indexOf('show_on_top')>-1){
		$('.btn_legend_close').click();
	}
	
	// 산불발생이력, 지진발생이력 기간분석 초기화 : 김경식
	layerSetVisibility(layers['LSMS_NEMA_FRFIRE'], false);
	layerSetVisibility(layers['LSMS_NEMA_ERTHQK'], false);
	
	// 열분포도 초기화 추가 : 20200120 김경식
	$('.heatWave').each(function() {
		$(this).removeClass('on');
		var num = $(this).attr("layer");
		if( num == 1 ) layerSetVisibility(layers['A2SM_HEATWAVE'], false);
		else layerSetVisibility(layers['A2SM_HEATWAVE'+num], false);
	});
	
	// 코로나바이러스 선별 진료소 초기화 : 20200203 김경식
	layerSetVisibility(layers['A2SM_HOSPITAL_CORONA'], false);
	$("#coronabtn").removeClass("on");

	// 지하철 정보 초기화 : 20200309 김경식
	$("#subwaySearchReset").click();
	
}

function checkedClear2(){
	$('.btn_legend_close').click();
	measureReset(); //거리면적

	if (smap.popups.length > 0){
		smap.removePopup(smap.popups[0]);
	}
	
	clearPoi();//poi초기화
	showHideLayers();//실시간초기화
	
	for (var i=0;i<$('.outer').children().length;i++){
		for(var k=0;k<$('.outer').children().eq(i).children().length;k++){
			if($('.outer').children().eq(i).children().eq(k).hasClass('on')){
				$('.outer').children().eq(i).children().eq(k).removeClass('on');
			}
		}
	}
	
	$('input[type=checkbox]').each(function(){
		if( $(this).prop('checked') == true ) {
			if( $(this).attr('id') != 'baselayer0' &&
				$(this).attr('id') != 'baselayer1' &&
				$(this).attr('id') != 'baselayer2' &&
				$(this).attr('id') != 'baselayer3' &&
				$(this).attr('id') != 'baselayer4' &&
				$(this).attr('id') != 'baselayer5' ){
				var id = $(this).attr('id');
				id = '#'+id; 
				
				$(id).click();
			}
		}
	});
	
	if(smap.getLayersByName("polygonLayer")[0]){
		smap.removeLayer(smap.getLayersByName("polygonLayer")[0]);
		if(polygonControl["cycle"]){
			polygonControl["cycle"].deactivate();
		}
		if(polygonControl["line"]){
			polygonControl["line"].deactivate();
		}
		
		smap.events.unregister('mouseup', smap, loding);
	}
	
	if(smap.getLayersByName("polygonLayer2")[0]){
		smap.removeLayer(smap.getLayersByName("polygonLayer2")[0]);
		if(polygonControl["line"]){
			polygonControl["line"].deactivate();
		}
	}
	
	$('#view_layer_pop').hide();
	safetyZone = false;
	safetyZoneFunc();
	
	searchBbox="";
	searchLeft = "";
	searchBottom = "";
	searchRight = "";
	searchTop = "";
	
	if($('#scLegendWrap')[0].className.indexOf('show_on_top')>-1){
		$('.btn_legend_close').click();
	}
}

//브라우저 종류 및 버전확인  
function funBrowserCheck(){ 
 
 var browerName   =navigator.appName;
 var browerAgent  = navigator.userAgent;
 var browserVer = 0 ; // 브라우저  버전정보 
 // 브라우져 종류 설정.
 if(browerName.charAt(0) == "M"){ 
   browerType="MSIE";
 }else if(browerName.charAt(0) == "N"){
   if(browerAgent.indexOf("Chrome") != -1){
    browerType="Chrome";
   }else if(browerAgent.indexOf("Firefox") != -1){
    browerType="Firefox";
   }else if(browerAgent.indexOf("Mobile Safari") != -1){
    browerType="Mobile Safari"; 
   }else if(browerAgent.indexOf("Safari") != -1){
    browerType="Safari";
   }
 } else {
  browserVer = "??";
 }
}

//function layerCnt(){
//	$('#sc_map_panels input[type=checkbox]').on('change',function() {
//		layerCnt = 0;
//		var layerId = $(this);
//		$('input[type=checkbox]').each(function(){
//			if( $(this).prop('checked') == true ) {
//				if( $(this).attr('id') != 'baselayer0' &&
//						$(this).attr('id') != 'baselayer1' &&
//						$(this).attr('id') != 'baselayer2' &&
//						$(this).attr('id') != 'baselayer3' &&
//						$(this).attr('id') != 'baselayer4' &&
//						$(this).attr('id') != 'baselayer5' ){
//					layerCnt = layerCnt +1;
//				}
//			}
//		});
//	});
//}
