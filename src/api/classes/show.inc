<?php

require_once($_SERVER['DOCUMENT_ROOT']."_/inc/init-api.inc");
require_once($_SERVER['DOCUMENT_ROOT']."api/classes/recording.inc");


Class Show implements JsonSerializable {

	//An array of Reocording objects;
	private $mRecordings = null;

	private $mDate = null;
	private $mLocation = null;
	private $mTitle = null;


	function __construct($date, $location, $title, $recordings = null) {
		$this->mDate = $date;
		$this->mLocation = $location;
		$this->mTitle = $title;
		$this->mRecordings = $recordings;
	}

	public function addRecording($recording) {
		if ($this->mRecordings == null) {
			$this->mRecordings = array();
		}

		//TODO: check for duplicate recording before adding one.
		$this->mRecordings[] = $recording;
	}

	public function getYear() {
		return new Year(Year::parseYear($this->mDate));
	}

	public function getDate() {
		return $this->mDate;
	}

	public function getPrintDate() {
		return gmdate("m-d-Y",strtotime($this->mDate));
	}

	public function getLocation() {
		return $this->mLocation;		
	}

	public function getTitle() {
		return $this->mTitle;
	}

	public function getRecordings() {
		//TODO: Load Recordings if it's null. This could be intensive.

		return $this->mRecordings;
	}

	public function hasSoundboard() {

		if ($this->mRecordings != null) {
			foreach($this->mRecordings as $recording) {
				if ($recording->isSoundboard()) {
					return true;
				}
			}
		}

		return false;
	}

	public function jsonSerialize() {
		$arr = array(
			"date" => $this->getPrintDate(),
			"title" => $this->mTitle,
			"location" => $this->mLocation,
			"hasSoundboard" => $this->hasSoundboard(),
			"recordings" => count($this->getRecordings())
		);	

		return (object) $arr;
	}
}

?>