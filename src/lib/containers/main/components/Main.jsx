import React from 'react'
import { connect } from 'react-redux'
import leftnav from '../../leftnav'
import bookmarks from '../../bookmarks'

import QueryView from '../../../components/QueryView'
import DatabaseInfoView from '../../../components/DatabaseInfoView'

const viewMap = {
  'query': QueryView,
  'dbinfo': DatabaseInfoView
}

export const Main = (props) => {
  if (viewMap[props.activeNav] === undefined) viewMap[props.activeNav] = viewMap['query']
  const ViewComponent = viewMap[props.activeNav]
  return (
    <div id='main'>
      <ViewComponent {...props} />
    </div>
  )
}

const mapStateToProps = (state) => {
  const context = bookmarks.selectors.getActiveBookmark(state)
  return {
    activeNav: leftnav.selectors.getActiveLeftNav(state, context) || 'query',
    context
  }
}

export default connect(mapStateToProps)(Main)