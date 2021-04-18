import React, { Component } from "react";
import { AppProps } from "next/app";

function StudentApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default StudentApp;
