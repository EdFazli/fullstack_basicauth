import { button } from "aws-amplify";
import React from "react";

export default function Button({ onCLick, title}) {
    return (
        <button style={styles.button} onClick={onCLick}>
            {title}
        </button>
    )
}

const styles = {
    button: {
        backgroundColor: "#006bfc",
        color: "white",
        width: "316",
        height: "45",
        fontWeight: "600",
        fontSize: "14",
        cursor: "pointer",
        border: "none",
        borderRadius: "3",
        marginTop: "25px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, .3)"
    },
}