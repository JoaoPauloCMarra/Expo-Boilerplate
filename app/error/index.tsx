import ErrorBoundary from '@/components/error-boundary';

const DemoErrorPage = () => <ErrorBoundary error={Error('Test error message')} />;

export default DemoErrorPage;
