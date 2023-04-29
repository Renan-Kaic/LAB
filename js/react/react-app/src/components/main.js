import React, { Component } from 'react'

import Form from './Form'
import Tarefas from './Tarefas'

import './main.css'

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
    }

    componentDidMount() {
        const tarefas = localStorage.getItem('tarefas')

        if (!tarefas) return

        this.setState({ tarefas: JSON.parse(tarefas) })
    }

    componentDidUpdate(prevPorps, prevState) {
        const { tarefas } = this.state

        if (tarefas === prevState.tarefas) return

        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { tarefas, index } = this.state
        let { novaTarefa } = this.state
        novaTarefa = novaTarefa.trim()

        if (tarefas.indexOf(novaTarefa) !== -1) {
            return
        }

        if (novaTarefa.length === 0) return

        const novaTarefas = [...tarefas]

        if (index === -1) {
            this.setState({
                tarefas: [...novaTarefas, novaTarefa],
                novaTarefa: '',
            })

            return
        }

        novaTarefas[index] = novaTarefa

        this.setState({
            tarefas: [...novaTarefas],
            index: -1,
            novaTarefa: '',
        })
    }

    handleChange = (event) => {
        this.setState({
            novaTarefa: event.target.value
        })
    }

    handleEdit = (event, index) => {
        const { tarefas } = this.state
        this.setState({
            index,
            novaTarefa: tarefas[index]
        })
    }

    handleDelete = (event, index) => {
        const { tarefas } = this.state
        const novaTarefas = [...tarefas]

        novaTarefas.splice(index, 1)

        this.setState({
            tarefas: [...novaTarefas]
        })
    }

    render() {
        const { novaTarefa, tarefas } = this.state
        return (
            <div className="main">
                <h1>
                    LISTA DE TAREFAS
                </h1>

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />

                <Tarefas
                    tarefas={tarefas}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                />
            </div>
        )
    }
}
