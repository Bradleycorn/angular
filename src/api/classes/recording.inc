<?php

require_once($_SERVER['DOCUMENT_ROOT']."api/init-api.inc");


Class Recording {

	private $mItem = null;

	private $mShow = null;


	function __construct($item, $show = null) {
		$this->mItem = $item;
		$this->mShow = $show;
	}


	public function getIdentifier() {
		return $this->mItem->identifier;
	}

	public function isSoundboard() {
		if (is_array($this->mItem->collection) && in_array("stream_only", $this->mItem->collection)) {
			return true;
		}

		return false;
	}

	public function getDownloads() {
		return $this->mItem->downloads;
	}
 
	public function getRating() {
		return $this->mItem->avg_rating;
	}
 
	public function getSetlist() {
		return $this->mItem->description;
	}
 
	public function getReviews() {
		return $this->mItem->num_Reviews;
	}
 
	public function getSource() {
		return $this->mItem->source;
	}
 
	public function getTitle() {
		return $this->mItem->title;
	}
 
	public function getShow() {
		//TODO: Create a Show object for the Recording if it's null. This could be an intensive process.

		return $this->mShow;
	} 

}



?>