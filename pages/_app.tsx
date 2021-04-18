import React, { Component } from "react";
import { AppProps } from "next/app";
import { wrapper} from "../redux";

function StudentApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default wrapper.withRedux(StudentApp);
