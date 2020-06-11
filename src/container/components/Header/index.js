import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {actions} from './store/'

const Header = props => {
  return (
    <div>
      <Link to="/">首页</Link>
      <br />
      {props.login ? (
        <>
          <Link to="/logout">翻译列表</Link>
          <br />
          <div onClick={props.handleLogout}>退出</div>
        </>
      ) : (
        <div onClick={props.handleLogin}>登录</div>
      )}

      <br />
    </div>
  )
}

const mapState = state => ({
  login: state.header.login,
})

const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  },
})

export default connect(mapState, mapDispatch)(Header)
