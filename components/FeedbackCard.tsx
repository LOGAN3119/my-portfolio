import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Fade from "react-reveal/Fade";
import { FeedbackType } from "../types/sections";

const FeedbackCard = ({ name, role, feedback, linkedin_Id, linkedin_Photo }: FeedbackType) => {
  return (
    <Card className="shadow-lg--hover shadow my-4 h-100">
      <CardBody>
        <img
          src={linkedin_Photo}
          style={{
            objectFit: "cover",
            position: "absolute",
            top: "1rem", // Adjust the top position as needed
            right: "1rem", // Adjust the right position as needed
            width: "5rem", // Adjust the width as needed
            height: "5rem", // Adjust the height as needed
            borderRadius: "50%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add shadow for better visibility
          }}
          alt={linkedin_Photo}
        />
        <div className="d-flex px-3">
          <div className="pl-4">
            <CardTitle tag="h4" className="mb-2">
              {name}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2">
              {role}
            </CardSubtitle>
            {linkedin_Id ? (
              <Button
                className="btn-icon"
                color="github"
                href={linkedin_Id}
                target="_blank"
                rel="noopener"
                aria-label="Github"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
            ) : null}
            <p className="description mt-2">{feedback}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
