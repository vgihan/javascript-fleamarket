const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const models = require("./backend/models/index");
const history = require("connect-history-api-fallback");
models.sequelize
    .sync()
    .then(() => {
        console.log("success db connect");
    })
    .catch((err) => {
        console.log(err);
    });

const pageRouter = require("./backend/page_router/index");
const itemRouter = require("./backend/resources/item/index");
const chatRouter = require("./backend/resources/chat/index");
const userRouter = require("./backend/resources/user/index");
const wishRouter = require("./backend/resources/wishlist/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "./frontend/views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./frontend")));

app.use("/item", itemRouter);
app.use("/chat", chatRouter);
app.use("/user", userRouter);
app.use("/wishlist", wishRouter);
app.use(
    history({
        index: "/",
    })
);
app.use("/", pageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error.html");
});

module.exports = app;
