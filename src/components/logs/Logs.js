import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";

// Pull out logs and loading
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs(); // Get all logs upon loading
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log // Refers to rootReducer in index.js
  // or
  //logs: state.log.logs
  //loading: state.log.loading
});
export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
