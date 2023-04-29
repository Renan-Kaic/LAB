import { toast } from 'react-toastify'

export function messageSuccess(message) {
	const randomId = () => Math.random().toString(36).substring(7)
	const customId = message + randomId()
	console.log(customId)
	toast.success(message, {
		position: toast.POSITION.TOP_RIGHT,
		toastId: customId,
	})
}

export function messageError(message) {
	const randomId = () => Math.random().toString(36).substring(7)
	const customId = message + randomId()
	console.log(customId)
	console.log(message)
	toast.error(message, {
		position: toast.POSITION.TOP_RIGHT,
		toastId: customId,
	})
}

export function messageWarning(message) {
	const randomId = () => Math.random().toString(36).substring(7)
	const customId = message + randomId()
	toast.warn(message, {
		position: toast.POSITION.TOP_RIGHT,
		toastId: customId,
	})
}
