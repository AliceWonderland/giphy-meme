import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MemeStill from '../components/MemeStill';
import * as MemeActions from '../actions/meme';


function mapStateToProps(state) {
  return {
    gifs: state.gifs,
    selectedGif: state.selectedGif
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MemeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeStill);
