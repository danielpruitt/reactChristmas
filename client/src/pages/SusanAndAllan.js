import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./Landing.css";
import API from "../utils/API";
import { Link } from "react-router-dom";



class SusanAndAllan extends Component {
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
                const newArr = res.data.filter(e => e.couple === "Susan and Allan");
                this.setState({
                    giftList: newArr
                });
                console.log(this.state.giftList)
            });
    };

    handleInputCheck = (event) => {
        event.preventDefault();
        const target = event.target;
        let name = target.name;
        let purchased = target.checked;

        API.updateGift({
            _id: name,
            purchased:purchased
        })
        .then(res => this.loadGifts())
        .catch(err => console.log(err, ' not real error handling'))
    };

    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col size="s12">
                            <h3 className="center">Susan and Allan</h3>
                            {this.state.giftList.length ? (
                                <List>
                                    {this.state.giftList.map(gift => (
                                        <div key={gift._id} >

                                            <ListItem key={gift._id}>

                                                <Row>
                                                    <Col size='s8'>
                                                        <Link to={"/gifts/" + gift._id}>
                                                            <strong className={gift.purchased ? 'purchased' : 'not-purchased'}>
                                                                {gift.gift}
                                                            </strong>
                                                        </Link>
                                                    </Col>
                                                    {gift.purchased ?
                                                        <Col size='s4'>
                                                        <label>
                                                            <input
                                                                checked= 'checked'
                                                                name={gift._id}
                                                                type="checkbox"
                                                                onChange={this.handleInputCheck}
                                                            />
                                                            <span>Purchased</span>
                                                        </label>


                                                    </Col>
                                                    :
                                                    <Col size='s4'>
                                                        <label>
                                                            <input
                                                                name={gift._id}
                                                                type="checkbox"
                                                                onChange={this.handleInputCheck}
                                                            />
                                                            <span> Available</span>
                                                        </label>


                                                    </Col>
                                                    
                                                }
                                                </Row>


                                            </ListItem>


                                        </div>

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

export default SusanAndAllan;