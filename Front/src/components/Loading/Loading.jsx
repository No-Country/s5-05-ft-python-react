import styles from "./loading.module.css";

const { container } = styles;

export const Loading = () => {
	return (
		<div className={container}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
