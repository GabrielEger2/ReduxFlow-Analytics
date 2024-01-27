"""Flask application creation and configuration.

This module defines the Flask application instance and its configuration,
including API settings, blueprints, database connection, and Swagger UI setup.
It provides the `create_app` function to initialize and configure the Flask app.
"""

from flask import Flask
# from flask_smorest import Api

from database import db


def create_app(db_url=None):
    """Create and configure the Flask application."""
    app = Flask(__name__)
    app.config["API_TITLE"] = "Stores REST API"
    app.config["API_VERSION"] = "v1"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/api"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config[
        "OPENAPI_SWAGGER_UI_URL"
    ] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url or "sqlite:///data.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["PROPAGATE_EXCEPTIONS"] = True
    db.init_app(app)
    # api = Api(app)

    with app.app_context():
        db.create_all()

    return app


if __name__ == "__main__":
    server = create_app()
    server.run(port=5000, debug=True)
