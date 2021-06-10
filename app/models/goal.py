from .db import db
from flask import jsonify


class Goal(db.Model):
    __tablename__ = "goals"

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False)
    completed_at = db.Column(db.DateTime)
    title = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="goals")
    steps = db.relationship("Step", back_populates="goal")

    def to_dict(self):
        return {
            "id": self.id,
            "created_at": self.created_at,
            "completed_at": self.completed_at,
            "title": self.title,
            "user_id": self.user_id,
            "steps": [step.to_dict() for step in self.steps]
        }
