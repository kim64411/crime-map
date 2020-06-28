<?php
include 'dbinf.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>범죄 현황 알리미</title>
  <meta content="" name="descriptison">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- Radio-->
  <link href="http://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<!--  <script src="http://netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> -->
  <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

 <!-- Naver Maps API -->
 <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=kfnhnf7qdq"></script>
 <script src="js/jquery-3.5.1.min.js"></script>
 <script src="js/MarkerClustering.js"></script>


<style>
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: #ff9999;
}

a:hover {
  color: #ff5555;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Raleway", sans-serif;
}


</style>

</head>

<body>

    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
  
        <h1 class="logo mr-auto"><a href="index.html">DUDUDUNGA</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
  
        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#services">Crime</a></li>
            <li><a href="index.html#related">Related</a></li>
            <li><a href="index.html#usage">Usage</a></li>
            <li><a href="index.html#contact">Contact</a></li>
  
          </ul>
        </nav><!-- .nav-menu -->
  
        <a href="map.php" class="get-started-btn scrollto">Map</a>
  
      </div>
    </header><!-- End Header -->



  <main id="main">

    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
        
            <div class="container">		
              <h2>범죄 조회</h2>	
              <div class="well well-sm text-center">
                <div class="btn-group" data-toggle="buttons">          
                  <label class="btn btn-success active">
                    <input type="radio" name="raCrimeGubun" id="raCrimeGubun1" autocomplete="off" chacked onclick="javascript:sortingMapByGubun(this.value)" value="ALL">
                    <span class="glyphicon glyphicon-ok"></span>전체&nbsp;&nbsp;
                  </label>
            
                  <label class="btn btn-danger">
                    <input type="radio" name="raCrimeGubun" id="raCrimeGubun2" autocomplete="off" value="살인" onclick="javascript:sortingMapByGubun(this.value)">
                    <span class="glyphicon glyphicon-ok"></span>살인&nbsp;&nbsp;
                  </label>
            
                  <label class="btn btn-danger">
                    <input type="radio" name="raCrimeGubun" id="raCrimeGubun3" autocomplete="off" value="성폭행" onclick="javascript:sortingMapByGubun(this.value)">
                    <span class="glyphicon glyphicon-ok"></span>성폭행&nbsp;&nbsp;
                  </label>
            
                  <label class="btn btn-warning">
                    <input type="radio" name="raCrimeGubun" id="raCrimeGubun4" autocomplete="off" value="강도" onclick="javascript:sortingMapByGubun(this.value)">
                    <span class="glyphicon glyphicon-ok"></span>강도&nbsp;&nbsp;
                  </label>
            
                  <label class="btn btn-warning">
                    <input type="radio" name="raCrimeGubun" id="raCrimeGubun5" autocomplete="off" value="도둑" onclick="javascript:sortingMapByGubun(this.value)">
                    <span class="glyphicon glyphicon-ok"></span>도둑&nbsp;&nbsp;
                  </label>
            
                  <label class="btn btn-info">
                    <input type="radio" name="raCrimeGubun" id="raCrimeGubun6" autocomplete="off" value="사기" onclick="javascript:sortingMapByGubun(this.value)">
                    <span class="glyphicon glyphicon-ok"></span>사기&nbsp;&nbsp;
                  </label>

                  <label class="btn btn-info">
                    <input type="radio" name="raCrimeGubun" id="raCrimeGubun7" autocomplete="off" value="기타" onclick="javascript:sortingMapByGubun(this.value)">
                    <span class="glyphicon glyphicon-ok"></span>기타&nbsp;&nbsp;
                  </label>
                
                </div>
            
            
              </div>
            
            </div>


        </div>

      </div>
    </section><!-- End Breadcrumbs -->


    <section class="inner-page">

      <div class="container">
            
          <div id="map" style="width:100%;height:600px;margin-top: auto;margin-left: auto;margin: 0px auto; border: solid 1px gray;"></div>

        <p>
          crime-map.ml
        </p>
      </div>
    </section>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">

      <div class="container">

   

      </div>
    </div>

    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>DUDUDUNGA</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/enno-free-simple-bootstrap-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>


<!-- Naver Maps API -->
<script>
var map = new naver.maps.Map('map', {
  center: new naver.maps.LatLng(36.299141, 128.044877),
  zoom: 7
});

var markers = [];
var markerClustering;

function sortingMapByGubun(crimeGubun){
  var newMarkers = [];
  for(var i = 0;i < markers.length; i++){
    markers[i].setMap(null);
  }

  if(crimeGubun == "ALL"){
    for(var i = 0; i< markers.length; i++){
      markers[i].setMap(map);
      newMarkers.push(markers[i]);
    }
  }

  else {
    for(var i = 0; i < markers.length; i++){
      if(crimeGubun == markers[i].title){
        markers[i].setMap(map);
        newMarkers.push(markers[i]);
      }

      else {
        markers[i].setMap(null);
      }
    }
  }
  markerCluster(newMarkers);
  //      map.setZoom(4);
}

function CustomMarker(lat,lng,crimeID,crimeGubun,serious,crimeDate,crimeTime){
  var contents_html="";
  if(serious==1){
        contents_html='<div style="padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;background-color:#b12121;color:white;text-align:center;border:1px solid #831616;border-radius:14px;opacity:75%" onmouseover="javascript:overCrime(\''+crimeID+'\');" onmouseout="javascript:outCrime(\''+crimeID+'\');">'+
        '<div style="font-weight:bold;font-size:14px">'+crimeGubun+'</div>'+
        '<div style="font-weight:normal;font-size:13px;margin-top:3px;display:none" id="'+crimeID+'">'+crimeDate+'<br/>'+crimeTime+'</div>'+
        '</div>';
  }

  if(serious==2){
        contents_html='<div style="padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;background-color:#e0692f;color:white;text-align:center;border:1px solid #831616;border-radius:14px;opacity:75%" onmouseover="javascript:overCrime(\''+crimeID+'\');" onmouseout="javascript:outCrime(\''+crimeID+'\');">'+
       '<div style="font-weight:bold;font-size:14px">'+crimeGubun+'</div>'+
       '<div style="font-weight:normal;font-size:13px;margin-top:3px;display:none" id="'+crimeID+'">'+crimeDate+'<br/>'+crimeTime+'</div>'+
       '</div>';
  }

  if(serious==3){
        contents_html='<div style="padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;background-color:#d3cc07;color:white;text-align:center;border:1px solid #a09b07;border-radius:14px;opacity:75%" onmouseover="javascript:overCrime(\''+crimeID+'\');" onmouseout="javascript:outCrime(\''+crimeID+'\');">'+
       '<div style="font-weight:bold;font-size:14px">'+crimeGubun+'</div>'+
       '<div style="font-weight:normal;font-size:13px;margin-top:3px;display:none" id="'+crimeID+'">'+crimeDate+'<br/>'+crimeTime+'</div>'+
       '</div>';
  }

  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(lat,lng),
    map: map,
    title: crimeGubun,
    icon: {
      content: contents_html,
      size: new naver.maps.Size(38,58),
      anchor: new naver.maps.Point(19,58),
      },
    draggable: false
  });
  return marker;
};

function loadCrimeMarker(){

<?php
$sql = "select crime_code,lat,lng,crime_gubun,crime_time,serious from table_crime_map";
$result = mysqli_query($conn,$sql);
$idx = 0;
while($row = mysqli_fetch_array($result)){
  $idx++;
  if($row["crime_time"]){
    $crime_time_arr = explode(" ",$row["crime_time"]);
    $crime_date = $crime_time_arr[0];
    $crime_time = $crime_time_arr[1];
  }
  $crimeID = "crime".$idx;
?>

var marker<?=$idx?> = new CustomMarker(<?=$row["lat"]?>,<?=$row["lng"]?>,"<?=$crimeID?>","<?=$row["crime_gubun"]?>",<?=$row["serious"]?>,"<?=$crime_date?>","<?=$crime_time?>");
markers.push(marker<?=$idx?>);
<?php
}
?>
  return markers;
}

function markerCluster(applyMarkers){
  var htmlMarker1 = {
    content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png);background-size:contain;"></div>',
    size: N.Size(40, 40),
    anchor: N.Point(20, 20)
  },
 
  htmlMarker2 = {
    content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-2.png);background-size:contain;"></div>',
    size: N.Size(40, 40),
    anchor: N.Point(20, 20)
  },
  
  htmlMarker3 = {
    content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-3.png);background-size:contain;"></div>',
    size: N.Size(40, 40),
    anchor: N.Point(20, 20)
  },
        
  htmlMarker4 = {
    content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-4.png);background-size:contain;"></div>',
    size: N.Size(40, 40),
    anchor: N.Point(20, 20)
  },
        
  htmlMarker5 = {
    content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-5.png);background-size:contain;"></div>',
    size: N.Size(40, 40),
    anchor: N.Point(20, 20)
  };

  if(markerClustering){
    markerClustering.map = null;
    markerClustrering = null;
  }

  markerClustering = new MarkerClustering({
        minClusterSize: 2,
        maxZoom: 13,
        map: map,
        markers: applyMarkers,
        disableClickZoom: false,
        gridSize: 120,
        icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
        indexGenerator: [10, 100, 200, 500, 1000],
        stylingFunction: function(clusterMarker, count) {
        $(clusterMarker.getElement()).find('div:first-child').text(count);
        }
        });
        map.refresh();
  };

$(document).ready(function() {
  var tMarkers = loadCrimeMarker();
  markerCluster(tMarkers);
});

function overCrime(childID){
  $("#"+childID).show();
}

function outCrime(childID){
  $("#"+childID).hide();
}

</script>


</body>

</html>

<?php
include 'dbend.php';
?>

