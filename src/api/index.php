<?php 
	header('Content-Type: application/json');

	require_once($_SERVER['DOCUMENT_ROOT']."/_/inc/init-api.inc");
	require_once($_SERVER['DOCUMENT_ROOT']."/_/inc/functions.inc");
	require_once($_SERVER['DOCUMENT_ROOT']."api/classes/year.inc");
	require_once($_SERVER['DOCUMENT_ROOT']."api/classes/show.inc");
	require_once($_SERVER['DOCUMENT_ROOT']."api/classes/recording.inc");


	$year = RequestData("year", null, true, "GET");
	$showDate = RequestData("show", null, true, "GET");
	$archiveId = RequestData("recording", null, true, "GET");

	$json = null;

	if (empty($year)) {
		$json = getYears();
	} elseif (empty($showDate)) {
		$json = getShows($year);
	} elseif (empty($archiveId)) {
		$json = getRecordings($showDate);
	} else {
		$json = getRecording($archiveId);
	}

	if ($json != null) {
		echo json_encode($json);
	}


	/* ============================================================ */


	function getYears() {
		global $DATA;

		$years = array();

		foreach ($DATA as $recordingJson) {
			$recording = new Recording($recordingJson);
			$show = $recording->getShow();
			$year = $show->getYear();

			$yearExists = false;
			foreach ($years as $existingYear) {
				if ($existingYear->getYear() == $year->getYear()) {
					$existingYear->addShow($show);
					$yearExists = true;
					break;
				}
			}

			if (!$yearExists) {
				$year->addShow($show);
				$years[] = $year;
			}
		}

		return $years;
	}


	function getShows($year) {
		global $DATA;

		$shows = array();

		foreach ($DATA as $recordingJson) {
			$recording = new Recording($recordingJson);
			$show = $recording->getShow();
			
			if ($show->getYear()->getYear() == $year) {
				$showExists = false;
				foreach($shows as $existingShow) {
					if ($existingShow->getPrintDate() == $show->getPrintDate()) {
						$existingShow->addRecording($recording);
						$showExists = true;
					}
				}

				if (!$showExists) {
					$show->addRecording($recording);
					$shows[] = $show;
				}
			}
		}

		return $shows;
	}


	function getRecordings($showDate) {
		global $DATA;

		$recordings = array();

		echo "getting recordings for: " . $showDate . "<br />";

		foreach ($DATA as $recordingJson) {
			$recording = new Recording($recordingJson);
			$show = $recording->getShow();
			
			if ($show->getPrintDate() == $showDate) {
				$recordings[] = $recording;
			} 
		}

		return $recordings;
	}


	function getRecording($archiveId) {
		global $DATA;

		foreach ($DATA as $recordingJson) {
			$recording = new Recording($recordingJson);
			
			if ($recording->getIdentifier() == $archiveId) {
				return $recording;
			}
		}

		return null;
	}
?>
