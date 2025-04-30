export const useData = () => {
  const insertComment = (tree, repliedToId, text) => {
    if (tree.id === repliedToId) {
      tree.replies.push({
        id: new Date().getTime(),
        text,
        replies: [],
      });

      return tree;
    }
    const latestNode = tree.replies.map((comment) => {
      return insertComment(comment, repliedToId, text);
    });

    return { ...tree, replies: latestNode };
  };

  const handleInsertNode = (comments, repliedToId, text) => {
    if (!repliedToId) {
      comments.push({
        id: new Date().getTime(),
        text,
        replies: [],
      });
      return comments;
    }
    return comments.map((comment) => {
      return insertComment(comment, repliedToId, text);
    });
  };

  const editComment = (tree, id, text) => {
    if (tree.id === id) {
      return {
        ...tree,
        text,
      };
    }
    const latestNode = tree.replies.map((item) => {
      return editComment(item, id, text);
    });
    return { ...tree, replies: latestNode };
  };

  const handleEditNode = (comments, id, text) => {
    return comments.map((comment) => {
      return editComment(comment, id, text);
    });
  };

  const deleteComment = (tree, id) => {
    if (tree.id === id) {
      return false;
    }
    return tree.replies.filter((item) => {
      return deleteComment(item, id);
    });
  };

  const handleDeleteNode = (comments, id) => {
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].id === id) {
        comments.splice(i, 1);
        return comments;
      } else {
        handleDeleteNode(comments[i].replies, id);
      }
    }
    return comments;
  };

  return { handleInsertNode, handleEditNode, handleDeleteNode };
};
