import DeviceOptions from './footer-components/DeviceOptions';
import ShareOptions from './footer-components/ShareOptions';
import QueueMenu from './footer-components/QueueMenu';

const Footer = () => {
	return (
		<div className='footer'>
			<DeviceOptions />
			<ShareOptions />
			<QueueMenu />
		</div>
	);
};

export default Footer;
