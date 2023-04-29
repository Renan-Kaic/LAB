import React from 'react'
import './form.css'
import PropTypes from 'prop-types'

import { FaPlus } from 'react-icons/fa'

export default function Form(props) {
    const { handleSubmit, handleChange, novaTarefa } = props
    return (
        <div>
            <form onSubmit={handleSubmit} action="#" className="form">
                <input
                    className="input"
                    onChange={handleChange}
                    type="text"
                    value={novaTarefa}
                    placeholder="Adicionar tarefa"
                />
                <button type="submit">
                    <FaPlus />
                </button>
            </form>

        </div>
    )
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}
