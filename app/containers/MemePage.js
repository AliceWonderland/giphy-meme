import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Meme from '../components/meme';
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

export default connect(mapStateToProps, mapDispatchToProps)(Meme);
