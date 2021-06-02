from .db import db


class Step(db.Model):
    __tablename__ = "steps"

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(500), nullable=False)
    completed = db.Column(db.Boolean, nullable=False)
    goal_id = db.Column(db.Integer, db.ForeignKey("goals.id"), nullable=False)

    goal = db.relationship("Goal", back_populates="steps")

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "completed": self.completed,
            "goal_id": self.goal_id,
        }
