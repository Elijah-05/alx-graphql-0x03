const ErrorProneComponent: React.FC = () => {
  throw new Error('This is the second error from Local Error Prone Component error!');
};

export default ErrorProneComponent;