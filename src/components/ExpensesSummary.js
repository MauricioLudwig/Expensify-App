import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAmountSum from '../selectors/expenses-total';
import filterExpenses from '../selectors/expenses';
import numeral from 'numeral';

export class ExpensesSummary extends Component {

    render() {

        const { expenses } = this.props;
        const amountSum = numeral((getAmountSum(expenses) / 100)).format('$0,0.00');

        return (
            <div>
                {
                    expenses.length > 0
                    && <p>{`Viewing ${expenses.length} ${expenses.length === 1 ? 'expense' : 'expenses'} totalling ${amountSum}`}</p>
                }
            </div>
        );
    }

};

const mapStateToProps = state => ({
    expenses: filterExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);