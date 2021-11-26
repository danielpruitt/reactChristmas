import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import { Card } from "../components/Card";
import { FormBtn, Input, TextArea } from "../components/Form";
import { List, ListItem } from "../components/List";
import "./Landing.css";
// import API and Link
import API from "../utils/API";
import { Link } from "react-router-dom";

class Gifts extends Component {
    state = {
        giftList: [],
        gift: "",
        couple: "",
        synopsis: "",
        purchased: false
    };

    // check component mounting
    componentDidMount() {
        this.loadGifts();

    };

    loadGifts = () => {
        API.getGifts()
            .then(res =>

                this.setState({
                    giftList: res.data,
                    gift: "",
                    couple: "",
                    synoposis: "",
                    purchased:false
                })

            )
            .catch(err => console.log(err + "Error in loadGifts()"))

    };

    // delete Gift from the DB
    deleteGift = id => {
        API.deleteGift(id)
            .then(res => this.loadGifts())
            .catch(err => console.log(err + "Error in deleteGift()"));
    };

    // handle changes
    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });


    };

    //handle the checkboxes
    handleInputCheck = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            couple: name
        });
    }


    // handle form submit
    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.gift && this.state.couple) {
            API.saveGift({
                gift: this.state.gift,
                couple: this.state.couple,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadGifts())
                .catch(err => console.log(err + " Error in the form submit"))
        }
        this.setState({
            synopsis: ""
        })
    }


    render() {
        return (
            <div>

                <Container className="z-depth-3">

                    <Row>
                        <Col size="s12">
                            <Input
                                type="text"
                                value={this.state.gift}
                                onChange={this.handleInputChange}
                                name="gift"
                                placeholder="Gift (required)"
                            />

                        </Col>


                    </Row>

                    <Row>
                        <Col size="s12">
                            <TextArea
                                value={this.state.synopsis}
                                onChange={this.handleInputChange}
                                name="synopsis"
                                placeholder="Details that others may need to know about. (websites, sizes, etc.)"
                            />

                        </Col>


                    </Row>
                    <Row>

                        <Col size="s6">
                            <br />
                            <label>
                                <input
                                    name="Mary and Bruce"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Mary and Bruce</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Cathy and Nick"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Cathy and Nick</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Susan and Allan"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Susan and Allan</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Christella and Ryan"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Christella and Ryan</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Rachel and Daniel"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Rachel and Daniel</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Tiffany and Andrew"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Tiffany and Andrew</span>
                            </label>
                            <br />

                        </Col>

                        <Col size="s6">

                            {/* <label>
                                <input
                                    name="Melissa and Ben"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Melissa and Ben</span>
                            </label>
                            <br /> */}
                            <label>
                                <input
                                    name="Allison and Andrew"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Allison and Andrew</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Mattie"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Mattie</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Tess"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Tess</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Thomas"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Thomas</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Kira"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Asher</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Ethan"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Ethan</span>
                            </label>
                            <br />
                            <label>
                                <input
                                    name="Bridger"
                                    type="checkbox"
                                    onChange={this.handleInputCheck} />
                                <span>Bridger</span>
                            </label>
                        </Col>

                    </Row>
                    <Row>
                        <Col size="s12">
                            <FormBtn
                                disabled={!(this.state.couple && this.state.gift)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Gift
                        </FormBtn>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col size="s12">



                        </Col>

                    </Row>

                </Container>
                <Container>
                    <Row>
                        <Col size="s4">
                            <List>
                                <ListItem>
                                    <Link to={"/MaryAndBruce"}><strong>Mary and Bruce</strong> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={"/CathyAndNick"}><strong>Cathy and Nick</strong> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={"/SusanAndAllan"}><strong>Susan and Allan</strong> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={"/ChristellaAndRyan"}><strong>Christella and Ryan</strong> </Link>
                                </ListItem>
                            </List>
                        </Col>
                        
                        <Col size="s4">
                            <List>
                                <ListItem>
                                    <Link to={"/RachelAndDaniel"}><strong>Rachel and Daniel</strong> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={"/TiffanyAndAndrew"}><strong>Tiffany and Andrew</strong> </Link>
                                </ListItem>
                                {/* <ListItem>
                                    <Link to={"/MelissaAndBen"}><strong>Melissa and Ben</strong> </Link>
                                </ListItem> */}
                                <ListItem>
                                    <Link to={"/AllisonAndAndrew"}><strong>Allison and Andrew</strong> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={"/Mattie"}><strong>Mattie</strong> </Link>
                                </ListItem>
                            </List>
                        </Col>

                        <Col size="s4">
                            <List>
                                <ListItem>
                                    <Link to={"/Tess"}><strong>Tess</strong> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={"/Thomas"}><strong>Thomas</strong> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={"/Kira"}><strong>Asher</strong> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={"/Ethan"}><strong>Ethan</strong> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link to={"/Bridger"}><strong>Bridger</strong> </Link>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}

export default Gifts;