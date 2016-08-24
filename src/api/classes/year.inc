<?php

require_once($_SERVER['DOCUMENT_ROOT']."api/init-api.inc");
require_once($_SERVER['DOCUMENT_ROOT']."api/classes/recording.inc");


Class Year {

	private $mShows = null;
	private $mYear = null;


	function __construct($year, $shows = null) {
		$this->mYear = $year;
		$this->mShows = $shows;
	}

	public function addShow($show) {
		if ($this->mShows == null) {
			$this->mShows = array();
		}
		//TODO: Check for duplicate show before adding one.
		$this->mShows[] = $show;
	}


	public function getYear() {
		return $this->year;
	}

	public function getShows() {
		//TODO: Load shows if it's null. This could be intensive.
		return $this->mShows;
	}

}

?>