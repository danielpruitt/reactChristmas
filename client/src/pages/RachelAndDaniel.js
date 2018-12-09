import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import { Card } from "../components/Card";
import { List, ListItem } from "../components/List";
import "./Landing.css";
// import API and Link
import API from "../utils/API";
import { Link } from "react-router-dom";



class RachelAndDaniel extends Component {
    state = {
        giftList: [],
    };


    //automatically loads gifts
    componentDidMount() {
        this.loadGifts()
    };

    //function to load gifts for the specific couple
    loadGifts() {
        API.getGifts()

            .then(res => {
                const newArr = res.data.filter(e => e.couple === "Rachel and Daniel");
                this.setState({
                    giftList: newArr
                })
            }

            )


    };

    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col size="s12">
                        <h3 className="center">Rachel and Daniel</h3>
                            {this.state.giftList.length ? (
                                <List>
                                    {this.state.giftList.map(gift => (
                                        <Link to={"/gifts/" + gift._id}>
                                            <ListItem key={gift._id}>
                                                <strong>
                                                    {gift.gift}
                                                </strong>

                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>

                            ) : (
                                    <h3>There are no gifts yet!</h3>
                                )
                            }
                    

                        </Col>
                    </Row>
                    <Row>
                        <Col size="s12">
                            <Link to="/">← Back to Home</Link>
                        </Col>
                    </Row>
                </Container>


            </div >
        )
    }


}

export default RachelAndDaniel;