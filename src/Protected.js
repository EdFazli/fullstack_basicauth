import React, {useEffect} from "react";
import { Auth } from "aws-amplify";
import Container from "./Container";
import { protectedRoute } from "./protectedRoute";

function Protected() {
    return (
        <Container>
            <h1>Protected Route!!!</h1>
        </Container>
    );
}

export default protectedRoute(Protected)
