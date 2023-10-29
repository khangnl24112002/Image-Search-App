import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';

function LoadingIndicator() {
    return (
        <Stack gap={2} className="my-5 mx-auto">
            <Spinner animation="border" variant="primary" />
        </Stack>
    );
}

export default LoadingIndicator;