import React from "react";

import { Col, Row, Container } from "../../components/Grid";


export const Instructions = () => (
    <div>
        <Container>
            <Row>
                <Col size="s12">
                    <h4>Instructions:</h4>
                    <h5 className="">
                        $40 per couple, comment on this post on gifts you would like.
                    </h5>
                    <h5>Kids put their normal list. They're excluded from the $40 couple gift.</h5>
                    {/* <h5> $10 White Elephant as well will be held.</h5> */}
                </Col>
            </Row>
            <br />

            <Row>
                <Col size="s12">
                    <h4>How to use:</h4>
                    <h5>
                        Write in what gift you and your spouse wants and then click your names. A description can be added if you want. Then hit submit and your gift is saved! Submissions can be click on to see the details. If this is a bit confusing, call or text Daniel.
                        If you need to edit or delete an item or items, let Daniel know.
                    </h5>
                </Col>

            </Row>
        </Container>

    </div>
)
export default Instructions;