import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';

// actions
import {
  fetchPhoneRegister,
} from './actions';


class RegisterPhone extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      registering : false,
      verification : false,
    };
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(newProps) {
    
  }

  render() {
    const {
      error,
    } = this.props;
    const {
      registering,
      verification,
    } = this.state;

    if (error) {
      return <div className={styles.errorMsg}>{ error }</div>;
    }

    return (
      <div className={classnames(appLayout.constraintWidth, styles.container)}>
        <Helmet><title>{`Register by Phone | OpenCrisisBoard`}</title></Helmet>

        { verification ? (
          <div className={appLayout.primaryContent}>
            <input
              key={'code'}
              type="text"
              className={styles.titleInput}
              placeholder={'Verification Code'}
              value={''}
              onChange={(event) => { updateCode(event.target.value); }}
            />

            <button onClick={(event) => { submitRegistration(event.target.value); }} className={styles.buttonInput}>
              { registering ? 'Submitting...' : 'Submit' }
            </button>
          </div>
        ) : (
          <div className={appLayout.primaryContent}>
            <input
              key={'phone'}
              type="text"
              className={styles.titleInput}
              placeholder={'Phone Number'}
              value={''}
              onChange={(event) => { updatePhoneNumber(event.target.value); }}
            />
            <input
              key={'name'}
              type="text"
              className={styles.titleInput}
              placeholder={'Name'}
              value={''}
              onChange={(event) => { updateName(event.target.value); }}
            />

            <button onClick={(event) => { submitPhone(event.target.value); }} className={styles.buttonInput}>
              { registering ? 'Registering...' : 'Register' }
            </button>
          </div>
        ) }
        
      </div>
    );
  }
}

export default connect(
  (state) => { return {
    
  }; },
  (dispatch) => { return {
    
  }; }
)(RegisterPhone);
