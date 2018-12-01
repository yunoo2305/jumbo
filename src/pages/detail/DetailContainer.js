import { drizzleConnect } from 'drizzle-react'
import Detail from './Detail'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  }
};

const DetailContainer = drizzleConnect(Detail, mapStateToProps);

export default DetailContainer;
