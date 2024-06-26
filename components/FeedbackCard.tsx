import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Fade from "react-reveal/Fade";
import { FeedbackType } from "../types/sections";

const FeedbackCard = ({ name, role, feedback, linkedin_Id, linkedin_Photo }: FeedbackType) => {
  return (
    <Card className="shadow-lg--hover shadow my-4 h-100 feedback-card">
      <CardBody style={{ display: "flex", flexDirection: "column" }}>
        <i className="fa fa-quote-left" aria-hidden="true"></i>
        <p className="description mt-2" style={{ flex: 1 }}>
          {feedback}
        </p>

        <div className="row" style={{ margin: 0 }}>
          <div style={{ flex: 1, padding: 0 }}>
            <CardTitle tag="p" className="mb-2" style={{ fontSize: "15px" }}>
              {name}
            </CardTitle>
            <CardSubtitle tag="p" style={{ fontSize: "11px" }}>
              {role}
            </CardSubtitle>
          </div>

          <Button
            style={{
              width: "2.5rem",
              height: "2.5rem",
              padding: 0,
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "50%",
            }}
            href={linkedin_Id}
            target="_blank"
            rel="noopener"
            aria-label="Linkedin"
          >
            <img
              src={linkedin_Photo}
              style={{
                objectFit: "cover",
                width: "2.5rem",
                height: "2.5rem",
                padding: "0px",
                borderRadius: "50%",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              alt={linkedin_Photo}
            />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
