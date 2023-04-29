import React from 'react'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import ProtTypes from 'prop-types'

import './tarefa.css'

export default function Tarefas(props) {
    const { tarefas, handleDelete, handleEdit } = props

    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {index + 1}
                    &nbsp;-&nbsp;
                    {tarefa}
                    <span>
                        <FaEdit
                            onClick={(e) => handleEdit(e, index)}
                            className="edit"
                        />
                        <FaWindowClose
                            onClick={(e) => handleDelete(e, index)}
                            className="delete"
                        />
                    </span>
                </li>
            ))}
        </ul>
    )
}

Tarefas.propTypes = {
    tarefas: ProtTypes.arrayOf(ProtTypes.string).isRequired,
    handleDelete: ProtTypes.func.isRequired,
    handleEdit: ProtTypes.func.isRequired,
}
