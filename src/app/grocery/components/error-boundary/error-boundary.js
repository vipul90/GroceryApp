import React from 'react';
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState(() => ({ error, info }));
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong.Please try again!!</h1>;
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes ={
    children : PropTypes.array
}
export default ErrorBoundary;
