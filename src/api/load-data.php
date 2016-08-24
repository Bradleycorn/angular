<?php

require_once($_SERVER['DOCUMENT_ROOT']."/api/init-api.inc");

define("BASE_URL", "http://archive.org/services/search/beta/scrape.php?sorts=date%20desc&size=1050&fields=avg_rating%2Ccollection%2Ccoverage%2Cdate%2Cdescription%2Cdownloads%2Cidentifier%2Cnum_reviews%2Cpublisher%2Csource%2Ctitle&q=collection%3AGratefulDead%20AND%20creator%3A(Grateful%20Dead)%20AND%20format%3AMP3");

$json = json_decode(file_get_contents(BASE_URL), false);

$strItems = json_encode($json->items);

file_put_contents(DATA_FILE, $strItems);


?>