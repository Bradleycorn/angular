<?php

require_once($_SERVER['DOCUMENT_ROOT']."api/init-api.inc");
require_once($_SERVER['DOCUMENT_ROOT']."api/classes/recording.inc");


Class Show {

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
		if ($this->mReordings == null) {
			$this->mRecordings = array();
		}

		//TODO: check for duplicate recording before adding one.
		$this->mRecordings[] = $recording;
	}

	public function getYear($jsonItem) {
		return getDate(strtotime($this->mDate))['year'];
	}

	public function getDate() {
		return $this->mDate;
	}

	public function getPrintDate() {
		return date("m/d/Y",strtotime($this->mDate));
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

}

?>