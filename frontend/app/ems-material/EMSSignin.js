import React , {Component} from 'react';
import styles from 'styles/emsMaterial/emsSignin';
import {Link} from 'react-router';
import {InputText,DropDown,StandardButton} from 'components/common/Forms';
import Form from 'components/common/Form';
import RaisedButton from 'material-ui/RaisedButton';

import PATHS from 'routes';

class SignIn extends Component{
	render(){
		const {color,fullWidthButtton,linkColor,defaultBackground,showHeader} = this.props;
		const showheader = showHeader ? '' : 'hide';
		const hintstyle ={
			'color':'grey' || 'white',
			'fontWeight':'100',
			'fontSize':'.8em'
		}
		const inputstyle ={
			'color':'grey' || 'white',
			'fontWeight':'100',
			'fontSize':'1em'
		}
		const underlineFocusstyle ={
			'borderColor':'#00BFA5'
		}
		const underlinestyle ={
			'borderColor':'#d6d6d6' || 'white'
		}
		const labelstyle ={
			'color':'white'
		}
		const modalstyle ={
			'borderColor':color || 'white'
		}
		const linkstyle ={
			color:'grey' || 'white'
		}
		const {login} = this.props;
		return(
				<div className={styles.signInWrapper}>
					<div className={`${styles.signInUi}`} style={modalstyle}>
					<InputText label='Username/Email'
								color='grey'
								underlineColor='#d6d6d6'
								underlineWidth='2px'
								labelColor='#6a6a6a'
								/>
					<InputText label='Password'
								type='password'
								color='grey'
								underlineColor='#d6d6d6'
								underlineWidth='2px'
								labelColor='#6a6a6a'
								/>
					<div className='buttons'>
						<RaisedButton
							label='Sign In'
							fullWidth={fullWidthButtton || false}
							backgroundColor={'#00BFA5'}
							labelColor="#fff"
							onClick={login}
						/>
					</div>
					<Form />
					<div className={`${styles.links}`}>
						<Link to={PATHS.signup}><span style={linkstyle}>Create an account</span></Link> | <span style={linkstyle}>Forgot password</span>
					</div>
				</div>
				</div>
			)
	}
}

export default SignIn;
