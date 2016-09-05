<?php

require_once($_SERVER['DOCUMENT_ROOT']."_/inc/init-api.inc");
require_once($_SERVER['DOCUMENT_ROOT']."api/classes/show.inc");


Class Year implements JsonSerializable {

	private $mShows = null;
	private $mYear = null;

	public static function parseYear($dateStr) {
		return getDate(strtotime($dateStr))['year'];
	}

	function __construct($year, $shows = null) {
		$this->mYear = $year;
		$this->mShows = $shows;
	}

	public function addShow($show) {
		if ($this->mShows == null) {
			$this->mShows = array();
		}

		//If this show is already in our list, don't add it.
		foreach ($this->mShows as $existingShow) {
			if ($existingShow->getPrintDate() == $show->getPrintDate()) {
				return;
			}
		}

		$this->mShows[] = $show;
	}


	public function getYear() {
		return $this->mYear;
	}

	public function getShows() {
		//TODO: Load shows if it's null. This could be intensive.
		return $this->mShows;
	}

	public function jsonSerialize() {
		$arr = array(
			"year" => $this->mYear,
			"shows" => count($this->mShows)
		);

		return (object) $arr;
	}

}

?>