<?php

define("DATA_FILE", $_SERVER["DOCUMENT_ROOT"]."api/data/deadshows.json");

$DATA = json_decode(file_get_contents(DATA_FILE), false);

?>