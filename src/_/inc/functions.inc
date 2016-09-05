<?php 

function RequestData($key, $default=null, $emptyAsDefault = false, $method = null) {
	if ($method != null)
		$method = strtoupper($method);

	if ($method == "GET") {
		if (isset($_GET[$key]) && (!$emptyAsDefault || !empty($_GET[$key])))
			return htmlentities($_GET[$key], ENT_QUOTES, 'UTF-8', false);
		return $default;
	} elseif ($method == "POST") {
		if (isset($_POST[$key]) && (!$emptyAsDefault || !empty($_POST[$key])))
			return $_POST[$key];
		return $default;
	} elseif ($method == "COOKIE") {
		if (isset($_COOKIE[$key]) && (!$emptyAsDefault || !empty($_COOKIE[$key])))
			return $_COOKIE[$key];
		return $default;
	} else {
		if (isset($_REQUEST[$key]))
			return $_REQUEST[$key];
		else {
			$data = json_decode(file_get_contents("php://input"), true);
			if (count($data) > 0 && isset($data[$key]) && (!$emptyAsDefault || !empty($data[$key])))
				return $data[$key];
			return $default;
		}
	}
}


?>