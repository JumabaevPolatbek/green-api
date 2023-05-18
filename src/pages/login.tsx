import styles from '../styles/login.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { FormEvent } from 'react';
import { useGetDetailQuery } from '@/store/api/account';
type Form = {
	idInstance: string;
	apiTokenInstance: string;
};
export default function () {
	const session = useSession();
	const { handleSubmit, register } = useForm<Form>();
	const btnSubmit: SubmitHandler<Form> = async (data) => {
		// const res = await fetch(
		// 	`https://api.green-api.com/waInstance${data.idInstance}/getStateInstance/${data.apiTokenInstance}`
		// );
		// console.log(await res.json());
		await console.log(signIn('credentials'));
	};
	const btSubmit = (e: FormEvent) => {
		e.preventDefault();
		setTimeout(() => signIn('credentials'), 3000);
	};
	console.log(session);
	return (
		<div className={styles['container']}>
			<div className={styles['screen']}>
				<div className={styles['screen__content']}>
					<form
						className={styles['login']}
						onSubmit={handleSubmit(btnSubmit)}
					>
						<div
							className={
								styles['login__field']
							}
						>
							<i
								className={`${styles['login__icon']} fas fa-user`}
							></i>
							<input
								type='text'
								className={
									styles['login__input']
								}
								placeholder='Id instance'
								{...register('idInstance')}
							/>
						</div>
						<div
							className={
								styles['login__field']
							}
						>
							<i
								className={`${styles['login__icon']} fas fa-lock`}
							></i>
							<input
								type='password'
								className={
									styles['login__input']
								}
								placeholder='Api Token Instance'
								{...register(
									'apiTokenInstance'
								)}
							/>
						</div>
						<button
							className={`button ${styles.login__submit}`}
							type='submit'
						>
							<span
								className={
									styles.button__text
								}
							>
								Log In Now
							</span>
							<i
								className={`${styles.button__icon} fas fa-chevron-right`}
							></i>
						</button>
					</form>
					{/* <div className={styles['social-login']}>
						<h3>log in via</h3>
						<div
							className={
								styles['social-icons']
							}
						>
							<a
								href='#'
								className={`${styles['social-login__icon']} fab fa-instagram`}
							></a>
							<a
								href='#'
								className={`${styles['social-login__icon']} fab fa-facebook`}
							></a>
							<a
								href='#'
								className={`${styles['social-login__icon']} fab fa-twitter`}
							></a>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
