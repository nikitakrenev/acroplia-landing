import React from "react";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {GetWords} from "../../data/lang/LangStore";

class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutAcropliaOpen: false,
      accountOpen: false,
      peopleOpen: false,
      communityOpen: false,
      videoconfOpen: false,
      creareContentOpen: false,
      pricingOpen: false,
      otherOpen: false,
      section: '',
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    const words = GetWords(this.props.language);
    const faqSection = words.faq;
    return (
      <React.Fragment>
        <section className="faq-section">
          <div className="container" style={{display: 'flex'}}>
            <div className="faq-nav">
              <List component="nav">
                <ListItem button onClick={() => this.setState({aboutAcropliaOpen: !this.state.aboutAcropliaOpen})} className="list-item">
                  <span className="list-item-text">{"About Acroplia"}</span>
                </ListItem>
                <Collapse in={this.state.aboutAcropliaOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ul>
                      <ListItem button className="list-item" onClick={() => {this.setState({section: 'whatIsAcroplia'})}}>
                        <li style={{color: (this.state.section === "whatIsAcroplia") ? '#287EFF' : '#6B6B6B'}}>{"What is Acroplia?"}</li>
                      </ListItem>
                      <ListItem button className="list-item" onClick={() => {this.setState({section: 'howToContactUs'})}}>
                        <li style={{color: (this.state.section === "howToContactUs") ? '#287EFF' : '#6B6B6B'}}>{"How to contact us?"}</li>
                      </ListItem>
                    </ul>
                  </List>
                </Collapse>

                <ListItem button onClick={() => this.setState({accountOpen: !this.state.accountOpen})} className="list-item">
                  <span className="list-item-text">{"Account"}</span>
                </ListItem>
                <Collapse in={this.state.accountOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ul>
                      <ListItem button className="list-item">
                        <li>{"How to create an account?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to fill your account info?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to login without password?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"What to do If I forgot my password and email?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to change background?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to change a profile photo?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"What does a public profile link mean?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to delete your account?"}</li>
                      </ListItem>
                    </ul>
                  </List>
                </Collapse>

                <ListItem button onClick={() => this.setState({peopleOpen: !this.state.peopleOpen})} className="list-item">
                  <span className="list-item-text">{"People"}</span>
                </ListItem>
                <Collapse in={this.state.peopleOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ul>
                      <ListItem button className="list-item">
                        <li>{"How to add a person to your contact list?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to delete a person from your contact list?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to change settings in your chat?"}</li>
                      </ListItem>
                    </ul>
                  </List>
                </Collapse>

                <ListItem button onClick={() => this.setState({communityOpen: !this.state.communityOpen})} className="list-item">
                  <span className="list-item-text">{"Community"}</span>
                </ListItem>
                <Collapse in={this.state.communityOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ul>
                      <ListItem button className="list-item">
                        <li>{"What is a community? Why do I need it?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to create a community?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to change settings of the community?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to invite people to the community?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to create posts in community?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"What is a Room? Why do I need it?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to create a room in community?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to invite people in the room?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to delete room in your community?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to leave the room in community?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to delete your community?"}</li>
                      </ListItem>
                      <ListItem button className="list-item">
                        <li>{"How to leave the community?"}</li>
                      </ListItem>
                    </ul>
                  </List>
                </Collapse>

                <ListItem button className="list-item">
                  <span className="list-item-text">{"Videoconference"}</span>
                </ListItem>

                <ListItem button className="list-item">
                  <span className="list-item-text">{"How to create content?"}</span>
                </ListItem>

                <ListItem button className="list-item">
                  <span className="list-item-text">{"Pricing"}</span>
                </ListItem>

                <ListItem button className="list-item">
                  <span className="list-item-text">{"Other questions"}</span>
                </ListItem>
              </List>
            </div>

            {(this.state.section === 'whatIsAcroplia') &&
              <div className="faq-article">
                <h2>{"What is Acroplia?"}</h2>
                <p>{faqSection.aboutAcroplia.whatIsAcroplia.description1}</p>
                <p>{faqSection.aboutAcroplia.whatIsAcroplia.description2}</p>
                <p>{faqSection.aboutAcroplia.whatIsAcroplia.description3}</p>
                <img src="img/Group955.png" alt="icon"/>
              </div>
            }

            {(this.state.section === 'howToContactUs') &&
            <div className="faq-article">
              <h2>{"How to contact us?"}</h2>
              <p>{faqSection.aboutAcroplia.howToContactUs.description1}</p>
              <p>{faqSection.aboutAcroplia.howToContactUs.description2}</p>
              <p className="faq-article-forms">{faqSection.aboutAcroplia.howToContactUs.description3}</p>
              <div className="faq-article-buttons">
                <button className="faq-article-button">
                  <span>{"Contact support"}</span>
                </button>
                <button className="faq-article-button">
                  <span>{"Contact sales"}</span>
                </button>
              </div>
            </div>
            }
          </div>

        </section>

        {/*<section className="gray-light-bg ptb-100">*/}
        {/*  <div className="container">*/}
        {/*    <div className="row justify-content-center">*/}
        {/*      <div className="col-md-9 col-lg-8">*/}
        {/*        <div className="section-heading mb-5 text-center">*/}
        {/*          <h2>Frequently Asked Questions</h2>*/}
        {/*          <p className="lead">*/}
        {/*            Quickly morph client-centric results through performance*/}
        {/*            based applications. Proactively facilitate professional*/}
        {/*            human capital for cutting-edge.*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-md-6">*/}
        {/*        <div className="single-faq">*/}
        {/*          <h5>How can I pay for this?</h5>*/}
        {/*          <p>*/}
        {/*            Intrinsicly implement high standards in strategic theme*/}
        {/*            areas via inexpensive solutions. Assertively conceptualize*/}
        {/*            prospective bandwidth whereas client-based imperatives.*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col-md-6">*/}
        {/*        <div className="single-faq">*/}
        {/*          <h5>Is it possible to pay yearly?</h5>*/}
        {/*          <p>*/}
        {/*            Assertively iterate user friendly innovation without*/}
        {/*            open-source markets. Monotonectally extend resource sucking*/}
        {/*            manufactured products without high-payoff paradigms.*/}
        {/*            Objectively customize ubiquitous information before*/}
        {/*            economically sound relationships.{" "}*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col-md-6">*/}
        {/*        <div className="single-faq">*/}
        {/*          <h5>Do you offer discounts on multiple items?</h5>*/}
        {/*          <p>*/}
        {/*            Dramatically target focused testing procedures after*/}
        {/*            holistic ideas. Collaboratively maximize high-payoff ROI and*/}
        {/*            value-added products. Distinctively deliver cooperative*/}
        {/*            collaboration and idea-sharing whereas customized*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col-md-6">*/}
        {/*        <div className="single-faq">*/}
        {/*          <h5>Is VAT included in plan prices?</h5>*/}
        {/*          <p>*/}
        {/*            Distinctively simplify high-quality initiatives for highly*/}
        {/*            efficient applications. Monotonectally repurpose integrated*/}
        {/*            customer service after magnetic e-services.{" "}*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col-md-6">*/}
        {/*        <div className="single-faq">*/}
        {/*          <h5>Will I pay more for some features?</h5>*/}
        {/*          <p>*/}
        {/*            Enthusiastically pontificate resource-leveling supply chains*/}
        {/*            whereas scalable markets. Authoritatively streamline*/}
        {/*            resource maximizing methods of empowerment*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="col-md-6">*/}
        {/*        <div className="single-faq">*/}
        {/*          <h5>Why are there no limits on the number of messages?</h5>*/}
        {/*          <p>*/}
        {/*            Assertively target turnkey ideas for market-driven portals.*/}
        {/*            Appropriately e-enable world-class intellectual capital*/}
        {/*            whereas 2.0 mindshare.*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </React.Fragment>
    );
  }
}

export default Faq;
