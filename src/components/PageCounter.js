import { page } from "@stickyroll/decorators";
import React from "react";

class PageCounter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <strong>{this.props.page}</strong>{" "}
                of{" "}
                <strong>{this.props.pages}</strong>
            </React.Fragment>
        );
    }
}

export default page(PageCounter);
