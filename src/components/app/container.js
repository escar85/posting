import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import * as actions from './redux-sagas/actions'
// import * as selectors from './redux-sagas/selectors'
import { postsSelector } from "../../redux/selectors";
// import { themesSelector } from './redux-sagas/selectors/themesSelectors'

const mapStateToProps = createStructuredSelector({
  posts: postsSelector,
});

const mapDispatchToProps = {};

export const connector = connect(mapStateToProps, mapDispatchToProps);
