import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import * as actions from '../../redux/actions'
import { postsSelector } from "../../redux/selectors";

const mapStateToProps = createStructuredSelector({
  posts: postsSelector,
});

const mapDispatchToProps = {
  onCreatePost: actions.onCreatePost,
  setPosts: actions.setPostsFromLocal,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
