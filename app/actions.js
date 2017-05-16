export function seriesInfoLoadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data,
  };
}

export function charactersFindAllComplete(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data,
  };
}

export function comicsFindAllComplete(data) {
  return {
    type: 'COMICS@FIND_ALL_COMPLETE',
    data,
  };
}

export function modalSet(data) {
  return {
    type: 'MODAL@SET',
    data,
  };
}

export function modalClear(data) {
  return {
    type: 'MODAL@CLEAR',
    data,
  };
}


export function charactersFindForId(id) {
  return (dispatch) => {
    fetch(`https://gateway.marvel.com:443/v1/public/series/${id}/characters?orderBy=-name&apikey=576ba112089165ff4de72eda3db860ec`)
    .then(res => res.json())
    .then((data) => {
      const characters = data.data.results;
      dispatch(charactersFindAllComplete(characters));
    });
  };
}

export function issuesFindForId(id) {
  return (dispatch) => {
    fetch(`https://gateway.marvel.com:443/v1/public/series/${id}/comics?apikey=576ba112089165ff4de72eda3db860ec`)
    .then(res => res.json())
    .then((data) => {
      const issues = data.data.results;
      dispatch(comicsFindAllComplete(issues));
    });
  };
}

export function seriesInfoSearch(name) {
  return (dispatch) => {
    // fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
    fetch(`https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${name}&apikey=576ba112089165ff4de72eda3db860ec
`)
    // fetch(`https://gateway.marvel.com:443/v1/public/series?limit=1&titleStartsWith=${name}/&apikey=576ba112089165ff4de72eda3db860ec`)
    .then(res => res.json())
    .then((data) => {
      const series = data.data.results[0];
      dispatch(seriesInfoLoadComplete(series));
      dispatch(charactersFindForId(series.id));
      dispatch(issuesFindForId(series.id));
    });
  };
}
