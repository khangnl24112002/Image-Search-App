import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <div className="search-bar">
            {/* <input
                type="text"
                placeholder="Search for photos..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            /> */}

            <Form inline>
                <Row>
                    <Col >
                        <Form.Control
                            type="text"
                            placeholder="Search for photos..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary" onClick={handleSearch}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SearchBar;
