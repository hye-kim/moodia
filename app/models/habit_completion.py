from .db import db


class Habit_Completion(db.Model):
    __tablename__ = "habit_completions"

    id = db.Column(db.Integer, primary_key=True)
    completed = db.Column(db.Boolean, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    habit_id = db.Column(db.Integer, db.ForeignKey("habits.id"), nullable=False)

    habit = db.relationship("Habit", back_populates="habit_completions")

    def to_dict(self):
        return {
            "id": self.id,
            "completed": self.completed,
            "date": self.date,
            "habit_id": self.habit_id,
        }
