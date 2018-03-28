const initialState = {}
export const actionTypes = {
  // GET_ARTICLE_LIST: 'GET_ARTICLE_LIST',
}

export const actions = {
  // get_article_list: function(tag = '', pageNum = 1) {
  //   return {
  //     type: actionTypes.GET_ARTICLE_LIST,
  //     tag,
  //     pageNum
  //   }
  // }
}

export function reducer(state: {} = initialState, action: any) {
  switch (action.type) {
    // case actionTypes.RESPONSE_ARTICLE_LIST:
    //   return {
    //     ...state,
    //     articleList: [...action.data.list],
    //     pageNum: action.data.pageNum,
    //     total: action.data.total
    //   }
    // case actionTypes.RESPONSE_ARTICLE_DETAIL:
    //   return {
    //     ...state,
    //     articleDetail: action.data
    //   }

    default:
      return state
  }
}
