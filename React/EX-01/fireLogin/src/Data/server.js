import { initializeApp } from 'firebase/app'
import {
	getAuth,
	createUserWithEmailAndPassword as createUser,
} from 'firebase/auth'
import { getDatabase, child, get, ref, set } from 'firebase/database'

const firebaseConfig = {
	/**/
}

async function consultarUser(email) {
	const Email = email.replace('.', '')
	const app = initializeApp(firebaseConfig)
	const dbRef = ref(getDatabase(app))

	try {
		const snap = await get(child(dbRef, `users/${Email}`))
		return snap.exists()
	} catch (error) {
		console.error(error)
		return 'erro ao consultar dados'
	}
}

async function cadastrarDados(dados) {
	const { nome, sobrenome, email, dataNascimento } = dados
	console.log(nome, sobrenome, email, dataNascimento)

	const app = initializeApp(firebaseConfig)
	const db = getDatabase(app)

	const EmailID = email.replace('.', '')

	const dds = await set(ref(db, `users/${EmailID}`), {
		nome,
		sobrenome,
		email,
		dataNascimento,
	})

	return dds
}

async function criarUser(dados) {
	const app = initializeApp(firebaseConfig)

	const auth = getAuth(app)

	const { email, senha } = dados

	createUser(auth, email, senha)
		.then((userCrend) => {
			const { user } = userCrend
			console.log(user)
			return true
		})
		.catch((error) => {
			const errorCode = error.code
			const errorMessage = error.message

			console.log(errorMessage, errorCode)
		})
}

export async function cadastrar(dados) {
	const { email } = dados
	console.log(consultarUser(email))
	if (consultarUser(email)) {
		console.log('A função geral foi chamada')
		await criarUser(dados)
		await cadastrarDados(dados)
		return 'cadastrado'
	}
	return '[return final] E-mail já cadastrado'
}
