import LoginForm from "@/src/components/ui-forms/login-form";

const LoginPage = () => {
	return (
		<main className="min-h-screen flex items-center justify-center flex-1">
			<div className="rounded-lg border shadow-sm w-full max-w-md mx-4 bg-white">
				<div className="flex flex-col space-y-1.5 p-6">
					<h3 className="font-semibold tracking-tight text-2xl text-center">One Connect</h3>
					<p className="text-sm text-center">
						Para poder acceder a la plataforma, ingresa tu correo electrónico y contraseña.
					</p>
				</div>
				<LoginForm />
			</div>
		</main>
	);
};

export default LoginPage;
