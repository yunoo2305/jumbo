import { drizzleConnect } from 'drizzle-react'
import PickSymbol from './PickSymbol'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  }
};

const PickSymbolContainer = drizzleConnect(PickSymbol, mapStateToProps);

export default PickSymbolContainer;
