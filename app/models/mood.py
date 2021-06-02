from .db import db


class Mood(db.Model):
    __tablename__ = "moods"

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="moods")

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "rating": self.rating,
            "user_id": self.user_id,
        }
