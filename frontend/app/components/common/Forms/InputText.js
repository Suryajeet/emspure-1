import React , {Component} from 'react';
import TextField from 'material-ui/TextField';

class InputText extends Component{
	render(){
		const {type,color,labelColor,labelFontWeight, fullWidthButtton,underlineColor,underlineWidth,hint,label, value, onChange, errorMessage} = this.props;
		const hintStyle ={
			'color':color || 'grey',
			'fontWeight':'100',
			'fontSize':'.8em'
		}
		const inputStyle ={
			'color':color || 'grey',
			'fontWeight':'100',
			'fontSize':'1em'
		}
		const underlineFocusStyle ={
			'borderColor':'#00BFA5'
		}
		const underlineStyle ={
			'borderColor':underlineColor || color || '#d6d6d6',
			'borderWidth':underlineWidth || '1px'
		}
		const labelStyle ={
			'color':labelColor || '#6a6a6a',
			'fontWeight': labelFontWeight || '100',
			'fontSize':'.8em'
		}
		return (
			<div>
				<TextField
					type={type}
	      	floatingLabelText={label}
					value={value}
					onChange={onChange}
	      	hintText={hint}
	      	floatingLabelStyle={labelStyle}
					hintStyle={hintStyle}
					inputStyle={inputStyle}
					underlineStyle={underlineStyle}
					fullWidth={fullWidthButtton || true}
					underlineFocusStyle={underlineFocusStyle}
			  />
				{ errorMessage &&
					<div className='errorMsg'>{errorMessage}</div>
				}
			</div>
		);
	}
}
export default InputText;
