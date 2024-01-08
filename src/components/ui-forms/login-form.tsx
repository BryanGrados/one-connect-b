"use client";

import { useAuthLogin } from "@/src/forms/login-form";
import Link from "next/link";

const LoginForm = () => {
	const { register, formSubmit, errors } = useAuthLogin();

	return (
		<form onSubmit={formSubmit}>
			<div className="p-6 space-y-4">
				<div className="space-y-2">
					<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
						Email
					</label>
					<input
						className="flex h-10 rounded-md border border-input px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
						placeholder="tucuenta@kayser.pe"
						type="email"
						{...register("email")}
					/>
				</div>
				<div className="space-y-2">
					<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
						Contraseña
					</label>
					<input
						className="flex h-10 rounded-md border border-input px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
						type="password"
						{...register("password")}
					/>
				</div>
			</div>
			<div className="p-6 flex flex-col items-center space-y-2">
				<button
					type="submit"
					className="bg-black text-white inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full"
				>
					Iniciar sesión
				</button>
				<Link className="underline text-sm text-gray-600 hover:text-gray-800" href="#">
					¿Necesitas ayuda? Contáctanos
				</Link>
			</div>
		</form>
	);
};

export default LoginForm;
