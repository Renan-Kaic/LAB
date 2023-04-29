import { toast } from 'react-toastify'

export function messageSuccess(message) {
	const customId = message
	toast.success(message, {
		position: toast.POSITION.TOP_RIGHT,
		toastId: customId,
	})
}

export function messageError(message) {
	const customId = message
	toast.error(message, {
		position: toast.POSITION.TOP_RIGHT,
		toastId: customId,
	})
}

export function messageWarning(message) {
	const customId = message
	toast.warn(message, {
		position: toast.POSITION.TOP_RIGHT,
		toastId: customId,
	})
}
