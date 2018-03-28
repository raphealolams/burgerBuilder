import React, { Component } from 'react'
import Aux from '../New'
import Modal from '../../components/Ui/Modal/Modal';

const withError = (WrappedComponent, axios) => {
  return class extends Component{

    state = {
      error: null,
    }


    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })

      this.resInterceptors = axios.interceptors.response.use(res => res, error => {
        this.setState({error})
      })
    }

    componentWillUnmount() {
      console.log("component will unmount")
      axios.interceptors.request.eject(this.reqInterceptors)
      axios.interceptors.response.eject(this.resInterceptors)      
    }

    errorCloseHandler = () => {
      this.setState({error: null})
    }

    render(){
      return (
        <Aux>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorCloseHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
} 

export default withError