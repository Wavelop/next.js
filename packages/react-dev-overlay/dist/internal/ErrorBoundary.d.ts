import React from 'react';
declare type ErrorBoundaryProps = {
    onError: (error: Error, componentStack: string | null) => void;
    globalOverlay?: boolean;
    isMounted?: boolean;
};
declare type ErrorBoundaryState = {
    error: Error | null;
};
declare class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
    state: {
        error: null;
    };
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    componentDidCatch(error: Error, errorInfo?: {
        componentStack?: string | null;
    }): void;
    render(): React.ReactNode;
}
export { ErrorBoundary };
