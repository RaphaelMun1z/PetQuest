import styles from './Select.module.scss'

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Select