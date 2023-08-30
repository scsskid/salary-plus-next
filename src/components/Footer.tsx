import styles from './Footer.module.css';

type Props = {};
export default function Footer({}: Props) {
	return (
		<footer className={`wrap ${styles.footer}`}>
			&copy; {new Date().getFullYear()}
		</footer>
	);
}
