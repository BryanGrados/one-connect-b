import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const SignInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(3).max(20),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

export const useAuthLogin = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

	const formSubmit = handleSubmit(async (data) => {
		console.log(data);
		toast.success("Form submitted");
	});

	return {
		register,
		formSubmit,
		errors,
	};
};
