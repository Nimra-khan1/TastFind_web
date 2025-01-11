import React from "react";

const Feedback = () => {
  const feedbackData = [
    {
      name: "John Doe",
      date: "January 10, 2025",
      feedback:
        "This is the best recipe website I’ve ever used! The instructions are clear, and the recipes are delicious.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      date: "January 9, 2025",
      feedback:
        "I love the variety of recipes available here. The layout is so user-friendly.",
      rating: 4,
    },
    {
      name: "Ali Ahmed",
      date: "January 8, 2025",
      feedback:
        "The images and step-by-step instructions are fantastic. I wish there were more regional dishes.",
      rating: 4.5,
    },
    {
      name: "Ali Ahmed",
      date: "January 8, 2025",
      feedback:
        "The images and step-by-step instructions are fantastic. I wish there were more regional dishes.",
      rating: 4.5,
    },
    {
      name: "Ali Ahmed",
      date: "January 8, 2025",
      feedback:
        "The images and step-by-step instructions are fantastic. I wish there were more regional dishes.",
      rating: 4.5,
    },

    {
      name: "Ali Ahmed",
      date: "January 8, 2025",
      feedback:
        "The images and step-by-step instructions are fantastic. I wish there were more regional dishes.",
      rating: 4.5,
    },
    {
      name: "Ali Ahmed",
      date: "January 8, 2025",
      feedback:
        "The images and step-by-step instructions are fantastic. I wish there were more regional dishes.",
      rating: 4.5,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Users Feedback</h2>
      <div className="row">
        {feedbackData.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
                <p className="card-text">{item.feedback}</p>
                <p className="card-text">
                  <strong>Rating:</strong> {item.rating} ⭐
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
