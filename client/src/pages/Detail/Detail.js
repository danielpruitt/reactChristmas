import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Detail extends Component {
    state = {
        gift: {}
    };

    componentDidMount() {
        API.getGift(this.props.match.params.id)
            .then(res => this.setState({ gift: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container >
                <Row>
                    <Col size="s12">
                    
                            <h4>
                                {this.state.gift.gift} for {this.state.gift.couple == "Kira" ? "Asher": this.state.gift.couple}
                            </h4>
                        
                    </Col>
                </Row>
                <Row>
                    <Col size="s12">
                        <article>
                            <h5>Details</h5>
                            <p>
                                {this.state.gift.synopsis}
                            </p>
                        </article>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

export default Detail;
