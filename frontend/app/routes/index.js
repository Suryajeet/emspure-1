const ROOT = "";
const HOME = `${ROOT}/`;
const SIGNUP = `/signup`;
const SIGNIN = `/signin`;
const DASHBOARD = `/dashboard`;
const PROFILE = `/:username`;
const PROFILE_ABOUT = `/:username/about`;
const PROFILE_ORGANIZATION = `/:username/organization`;
const DEFAULT = `${PROFILE}`;

const ROUTER_MASTER = {
	default:DEFAULT,
	home:HOME,
	signin:SIGNIN,
	signup:SIGNUP,
	dashboard:DASHBOARD,
	profile:PROFILE,
	profileAbout:PROFILE_ABOUT,
	profileOrganization:PROFILE_ORGANIZATION
}

export default ROUTER_MASTER;