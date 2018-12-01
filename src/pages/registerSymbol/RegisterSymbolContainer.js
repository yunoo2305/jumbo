import { drizzleConnect } from 'drizzle-react'
import RegisterSymbol from './RegisterSymbol'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  }
};

const RegisterSymbolContainer = drizzleConnect(RegisterSymbol, mapStateToProps);

export default RegisterSymbolContainer;
