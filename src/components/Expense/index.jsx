const Expense = (props) => {
    const { expense } = props

    return (
        <div className="bg-indigo-50 m-10 py-6 px-8 flex rounded-md shadow-md justify-between">
            <div className="flex flex-col items-start">
                <p>{expense.item}</p>
                <p>{expense.cost} ₽</p>
            </div>
            
            
        </div>
    )
}

export default Expense