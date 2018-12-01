import { drizzleConnect } from 'drizzle-react'
import RegisterJumboCandidate from './RegisterJumboCandidate'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus
  }
};

const RegisterJumboCandidateContainer = drizzleConnect(RegisterJumboCandidate, mapStateToProps);

export default RegisterJumboCandidateContainer;
