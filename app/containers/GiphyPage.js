import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Giphy from '../components/giphy';
import * as GiphyActions from '../actions/giphy';


function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(GiphyActions.fetchGifs());

  // return bindActionCreators(GiphyActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Giphy);
