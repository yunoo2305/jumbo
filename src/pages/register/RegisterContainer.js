import { drizzleConnect } from 'drizzle-react'
import Register from './Register'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  }
};

const RegisterContainer = drizzleConnect(Register, mapStateToProps);

export default RegisterContainer;
